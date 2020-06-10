const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer
    .prompt([
        {
            type:"input",
            message:"What is your Github user id?",
            name:"userid"
        },
        {
            type:"input",
            message:"What is your email address?",
            name:"email"
        },
        {
            type: "input",
            message: "Enter a badge",
            name: "badge"
        },
        {
            type: "input",
            message: "What is the title of the project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter the description of the object:",
            name: "description"
        },
        {
            type: "input",
            message: "Type the installation steps:",
            name: "installation"
        },
        {
            type: "input",
            message: "What is the usage of the project?",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter the license of this project",
            name: "license"
        },
        {
            type: "input",
            message: "Type the contributions of this project:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Type an tests you ran on the project:",
            name: "tests"
        },
    ]).then(function(response){
        const writeFileAsync = util.promisify(fs.writeFile);
        writeFileAsync("README.md",
        `# README Generator
Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

            nshbdaoiusdoaisduais

The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
The README will be populated with the following:

## Project Title
${response.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
## Description
${response.description}
## Installation
${response.installation}
## License
${response.license}
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
            * User GitHub profile picture
            * User GitHub email
*[ What is this? ]
[common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates)

The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
The README will be populated with the following:
`
);
        
        
    });

    