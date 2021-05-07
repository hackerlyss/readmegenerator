const inquirer = require('inquirer')
const fs = require('fs')



const readMe = ({name,email,username,project,description,test,github,command,license,usage,contribute}) => {
    var readmeString = `
    # ${project}\n
    ${license}\n
    ## Table of Contents \n
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)

    ## Description\n
    ${description}\n

    ## Installation\n
    To install necessary dependencies, run the following command:\n
    ${command}\n

    ## Usage\n
    ${usage}\n

    
    ## Contributing\n
    ${contribute}\n

    ## Tests\n
    To run tests, run the following command:\n
    ${test}\n

    # Questions\n
    Hello my name is ${name}, you can reach me at ${email}\n
    My GitHub username is ${username}\n
    Live link to my repository: [github repository](${github})\n
    

 
    `;
    return readmeString;
};

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'project'
    },
    {
        type: 'input',
        message: "Please write a short description of your project:",
        name: 'description'
    },
    {
        type: 'input',
        message:'What command should be run to run tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'command'
    },
    {
        type: 'checkbox',
        message: 'Please choose from the following licenses:',
        name: 'license',
        choices: [
            {
                name: "MIT[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "Apache[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            },
            {
                name: "GNU[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            },
            {
                name: "ISC[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
            }
        ],
        validate: function (answer) {
            if (answer.length < 1) {
              return 'You must choose a license.';
            }
    
            return true;
          }
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: "What is your GitHub repository URL?",
        name: 'github'
    }
]).then(response => {
    const filename = `${response.project.split(' ').join('')}Readme.md`;
    fs.writeFile(filename, readMe(response), (err) =>
        err ? error.log(err) : console.log("success"));
        
})