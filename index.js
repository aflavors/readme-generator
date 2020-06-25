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
    var d = new Date();
    var year = d.getFullYear();
    switch (response.license) {
        case "MIT":
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            licenseNotice = `Copyright (c) ${year} ${response.githubUsername}

            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
            break;
        case "Apache":
            badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            licenseNotice = `Copyright (c) ${year} ${response.githubUsername}

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
            licenseNotice = `Copyright (C) ${year}  ${response.githubUsername}

            This program is free software; you can redistribute it and/or
            modify it under the terms of the GNU General Public License
            as published by the Free Software Foundation; either version 2
            of the License, or (at your option) any later version.
            
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.`
            break;
        case "GPLv3":
            badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
            licenseNotice = `Copyright (C) ${year}  ${response.githubUsername}

            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
        
            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>.`
            break;
        case "BSD 2-clause":
            badge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
            licenseNotice = `Copyright ${year} ${response.githubUsername}

            Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
            
            1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            
            2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
            
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
            break;
        case "BSD 3-clause":
            badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
            licenseNotice = `Copyright ${year} ${response.githubUsername}

            Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
            
            1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            
            2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
            
            3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
            
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
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

    fs.writeFile(`${response.title}-README.md`, readmeMarkdown, function(err){
        if (err){
            return console.log(err);
        }
        console.log("Success!")
    })
});