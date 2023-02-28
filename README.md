<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">recipeScraper</h3>

  <p align="center">
    A super simple recipe scraper to convert a PDF recipe book to JSON or Markdown
    <br />
    <a href="https://github.com/thopay/recipeScraper"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/thopay/recipeScraper">Report Bug</a>
    ·
    <a href="https://github.com/thopay/recipeScraper">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

I was inspired to create this because I've been building my Obisdian Vault and wanted to add recipes to my recipe section. I found that I really enjoyed the recipes from [@theremingtonjames](https://www.youtube.com/@theremingtonjames) and figured I'd try to convert [his recipe book](https://payhip.com/b/nbI4) to match my recipe template format for Obsidian.

| **My Recipe Template** | **RJF's Recipe Example** |
| ---------------------- | ------------------------ |
|<img src="https://user-images.githubusercontent.com/60588709/221757556-2c6edb27-7dac-4afd-857e-a13eb2196536.png" height="750" > | <img src="https://user-images.githubusercontent.com/60588709/221757925-f9e0a76a-bd74-4ebe-b99b-468b9fbe37ab.png" height="750"> |

### Demo



https://user-images.githubusercontent.com/60588709/221901590-2a680cee-7ee7-4719-b8b2-3326fa8efa4e.mp4


### Built With
* [Node](https://nodejs.org/)
* [pdf-parse](https://www.npmjs.com/package/pdf-parse)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* RJF Cookbook (or ability to adjust code to scrape your cookbook of choice)

### Installation

1. Clone the repo
```sh
git clone https://github.com/thopay/recipeScraper.git
```
2. Install NPM packages
```sh
npm install
```
3.
```sh
node index
```



<!-- USAGE EXAMPLES -->
## Usage

Place the cookbook in the project directory (rename cookbook to "cookbook.pdf" or adjust code to account for custom file name). Create a folder titled recipes in the project directory. Run the file to generate the markdown files. (*Adjust the functions to account for preferred template or formatting to your liking*)

<!-- ROADMAP -->
## Roadmap

* Nothing specific at the moment, but I might work on adding other cookbooks

See the [open issues](https://github.com/thopay/recipeScraper/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License.


<!-- CONTACT -->
## Contact

Thomas - [@th___mas](https://twitter.com/th___mas) - me@thopay.dev

Project Link: [https://github.com/thopay/recipeScraper](https://github.com/thopay/recipeScraper)
