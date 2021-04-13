const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your username on git hub?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Title this project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email address associated with this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
        choices: [
            'The internet',
            'A Zip File',
            'Provided'
        ]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the user experience with this application?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who worked on this project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions regarding this project?'
    }
]).then(function(data){
console.log(data)
// Call the function here in body
})


function info (file, data) {
    return fs.writeFileSync (path.join(process.cwd(), file), data)
} 
function markdown(){
// make a function for markdown

        console.log(data.license)

        const readMe = `
## ${data.title}
## ${getLicense(data.license)}
## ${data.username} | ${data.email}
## ![img](${res.data.avatar_url})
## Table of Contents
1. Description
2. Installation
3. Usage
4. Contributors
5. Questions
# Description
${data.description}
# Installation
${data.installation}
# Usage
${data.usage}
# Contributors
${data.contributors}
# Questions
${data.questions}`
      fs.writeFile('README.md', readMe, (err) => {
        if (err) {
            throw err;
        }
    });
    };