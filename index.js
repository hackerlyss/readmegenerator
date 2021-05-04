const inquirer = require('inquirer')
const fs = require('fs')

const readMe = ({name,username,email,project,description,test,command,license,usage,contribute}) => {
    var readmeString = `Hello my name is ${name}, you can find me at (${github})
    or ${email}\n
    ##Welcome to ${project}\n
    #Description\n
    ${description}\n
    #Installation\n
    To install necessary dependencies, run the following command:\n
    ${command}\n
    #Usage\n
    ${usage}\n
    #License\n
    ${license}\n
    #Contributing\n
    ${contribute}\n
    #Tests\n
    To run tests, run the following command:\n
    ${test}\n
 
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
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'license'
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
    }
]).then(response => {
    fs.writeFile("NewREADME.md", readMe(), (err) =>
        err ? error.log(err) : console.log("success"));
})