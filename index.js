const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./untils/generateMarkdown')
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Description:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Installation instructions:',
        name: 'instructions',
      },
      {
        type: 'input',
        message: 'Usage:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Features:',
        name: 'features',
      },
      {
        type: 'input',
        message: 'How to Contribute:',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Credits:',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['MIT', 'Perl', 'SIL', 'none']
      },
      {
        type: 'input',
        message: 'Tests:',
        name: 'test',
      },
    ])
}
const init = () => {
  promptUser()
    .then((response) => {
      fs.writeFile(`${response.title}.md`, generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log('Success!'))
    }
    );
}
init();
      //https://github.com/Beaterok
      //https://www.linkedin.com/in/alexander-loburev-087b84186/

  //   ;
  // switch(license) {
  //   case "MIT":

  //     break;
  //   case "GPL":
  //     break;
  //     case "BSD":
  //     break;
  //   default:
  // }
