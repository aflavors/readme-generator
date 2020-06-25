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
    var licenseNotice;
    switch (response.license) {
        case "MIT":
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            break;
        case "Apache":
            badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            licenseNotice = `Copyright (c) 2020 ${response.githubUsername}

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
         
              http://www.apache.org/licenses/LICENSE-2.0
         
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`
            break;
        case "GPLv2":
            badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
            break;
        case "GPLv3":
            badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
            break;
        case "BSD 2-clause":
            badge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
            break;
        case "BSD 3-clause":
            badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
            break;
        default:
            badge = "Insert badge here";
    }

let readmeMarkdown =`
# ${response.title}
${badge}

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

${licenseNotice}

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