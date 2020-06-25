var inquirer = require("inquirer");
var fs = require("fs");

inquirer
.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions for use:",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide contribution guidelines:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide an example of how to test your application:",
        name: "tests"
    },
    {
        type: "list",
        message: "Select a license for your application:",
        name: "license",
        choices: ["MIT", "Apache", "GPLv2", "GPLv3", "BSD 2-clause", "BSD 3-clause",]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUsername"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
])
.then (function(response){

    var badge;
    switch (response.license) {
        case "MIT":
            badge = "MIT badge"
            break;
        case "Apache":
            badge = "Apache badge"
            break;
        case "GPLv2":
            badge = "GPLv2 badge"
            break;
        case "GPLv3":
            badge = "GPLv3 badge"
            break;
        case "BSD 2-clause":
            badge = "BSD 2-clause badge"
            break;
        case "BSD 3-clause":
            badge = "BSD 3-clause badge"
            break;
        default:
            badge = "Insert badge here";
    }

let readmeMarkdown =`
# ${response.title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

### Description

${response.description}

### Installation

${response.installation}

### Usage

${response.usage}

### Contributing

${response.contributing}

### Tests

${response.tests}

### License

${response.license}

### Badge

${badge}

### Questions

${response.title} was created by [${response.githubUsername}](https://github.com/${response.githubUsername}).

If you have any questions, please contact me at ${response.email}. 
`
    console.log(response);

    fs.writeFile("ProjectTitle-README.md", readmeMarkdown, function(err){
        if (err){
            return console.log(err);
        }
        console.log("Success!")
    })
});