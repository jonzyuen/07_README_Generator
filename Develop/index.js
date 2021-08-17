// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'userName',
      message: 'Enter your name:',
      validate: userNameInput => {
        if (userNameInput) {
          return true;
        } else {
          console.log('User name is required.')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the name of your project:',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Project name is required.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'repositoryName',
      message: "Enter the name of your project's repository:",
      validate: repositoryNameInput => {
        if (repositoryNameInput) {
          return true;
        } else {
          console.log("Project's repository name is required.");
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the description:',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Project description is required.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:'
    },
    {
      type: '',
      name: '',
      message: ''
    },
    {
      type: '',
      name: '',
      message: ''
    },
    {
      type: '',
      name: '',
      message: ''
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select the license your project is under.',
      choices: ['MIT', 'GNU 3.0', 'Mozilla 2.0', 'Apache 2.0']
    },
    {
      type: 'confirm',
      name: 'linkConfirm',
      message: 'Include a link to your project/repository?',
      default: false
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the link of your project',
      when: ({linkConfirm}) => {
        if (linkConfirm) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'tableOfContentsConfirm',
      message: 'Would you like the README to include a table of contents?',
      default: true
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(answers, data) {
  fs.writeFile(`README (${answers.projectName}${Date.now()}).md`, data, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (answers) {
      writeToFile('README.md', generateMarkdown(answers));
    });
};

init();