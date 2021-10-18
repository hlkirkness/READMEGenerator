// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs'); //--> file system

var generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is your title?",
        name: "title"
    },
    {
        type: "input",
        message: "what is the description?",
        name: "description"
    },
    {
        type: "input",
        message: "how do we install?",
        name: "install"
    },
    {
        type: "list",
        message: "Which license do you want to use?",
        name: "license",
        choices: [
            'MIT',
            'Mozilla'
        ]
    }

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // generate the file using the string data
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {

            // generate the string data
            var desiredOutput = generateMarkdown(answers)

            console.log(desiredOutput)

            writeToFile('./output/README.md', desiredOutput)
            
  });
}

// Function call to initialize app
init();
