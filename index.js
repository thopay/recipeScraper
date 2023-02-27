const fs = require('fs');
const pdf = require('pdf-parse');
 
const dataBuffer = fs.readFileSync('./cookbook.pdf');
 
const getIngredients = (str) => {
	const data = str.split("Calories:")[0].split('\n');
	const rawIngredients = data.slice(1, data.length/2);
	const ingredientAmount = data.slice(data.length/2, data.length - 1);
	const ingredients = {};
	for (let i = 0; i < rawIngredients.length; i++) {
		ingredients[rawIngredients[i]] = ingredientAmount[i];
	}
	return ingredients;
};

const getMacros = (str) => {
	let data = str.slice(str.indexOf("Calories:"));
	data = data.slice(0, data.indexOf("DIRECTIONS:"));
	data = data.split('\n');
	data = data.slice(0, data.length - 2);
	const rawMacros = data.slice(0, data.length/2);
	const macroAmounts = data.slice(data.length/2);
	const macros = {};
	for (let i = 0; i < rawMacros.length; i++) {
		macros[rawMacros[i]] = macroAmounts[i];
	}
	return macros;
}

function toTitleCase(str) {
	return str.replace(
	  /\w\S*/g,
	  function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  }
	);
  };

const getName = (str) => {
	let data = str.slice(0, str.indexOf("DIRECTIONS:"));
	data = data.split('\n');
	let result = data[data.length - 2];
	result = result.replaceAll('  ','%');
	result = result.replaceAll(' ','');
	result = result.replaceAll('%', ' ');
	return toTitleCase(result);
}

const getDirections = (str) => {
	let data = str.slice(str.indexOf("DIRECTIONS:") + "DIRECTIONS:".length + 1);
	data = data.replace(/\d+\n/, '');
	let directions = data.split(/\n(?=[A-Z])/g);
	for (let i = 0; i < directions.length; i++) {
		directions[i] = directions[i].replaceAll('\n', ' ');
		if (i == directions.length - 1) {
			directions[i] = directions[i].replace(/\d+\s{2}/, ''); // Replace page number with 2 spaces
			directions[i] = directions[i].replace(/\d+$/, ''); // Replace page number at end of string
		}
		directions[i] = directions[i].replace(/\s+/g, " ").trim(); // Strip extra whitespace
	}
	return directions;
}

const outputRecipes = (recipes) => {
	for (let i = 0; i < recipes.length; i++) {
		let ingredientStr = ``;
		for (const [key, value] of Object.entries(recipes[i].ingredients)) {
			ingredientStr += `- ${value} ${key}\n`;
		}
		let directionStr = ``; 
		for (let j = 0; j < recipes[i].directions.length; j++) {
			directionStr += `${j + 1}. ${recipes[i].directions[j]}\n`;
		}
		const markdown = `Home: [[🏠 Recipes]]
Tags: 
References: 

## Macros
##### Calories: ${recipes[i].macros["Calories:"]}
##### Protein: ${recipes[i].macros["Protein:"]}
##### Carbs: ${recipes[i].macros["Carbohydrates:"]}
##### Fats: ${recipes[i].macros["Fat:"]}
##### Fiber: ${recipes[i].macros["Fiber:"]}

## Ingredients
${ingredientStr}
## Cooking
${directionStr}
## Serving
- 

## Notes
- `
		fs.writeFileSync(`./recipes/${recipes[i].name}.md`, markdown);
	}
}

pdf(dataBuffer).then(function(data) {
	recipes = data.text.split(/INGREDIENTS:MACROS:(.*?)(?:INGREDIENTS:MACROS|$)/gms).filter(e => e.length > 0);
	const recipeBook = [];
	for (let i = 0; i < recipes.length; i++) {
		recipeBook.push({
			name: getName(recipes[i]),
			ingredients: getIngredients(recipes[i]),
			macros: getMacros(recipes[i]),
			directions: getDirections(recipes[i])
		});
	}
	outputRecipes(recipeBook);
	console.log(`Done: Created ${recipeBook.length} recipes.`)
});