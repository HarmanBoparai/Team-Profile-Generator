// Packages for this application 
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

const generateHTMLFile = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeerole',
          message: 'What is the role of an employee,please choose?',
          choices:["Manager","Engineer", "Intern"]
        },
        {
          type: 'input',
          name: 'mname',
          message: 'What is the name of the manager?',
        },
        {
          type: 'input',
          name: 'mid',
          message: 'What is managers id?',
        },
        {
          type: 'input',
          name: 'memail',
          message: 'What is the email id of the manager?',
        },
        {
          type: 'input',
          name: 'officeno',
          message: 'What is the office no of the manager?',
        },
        {
          type: 'input',
          name: 'ename',
          message: 'What is the name of the engineer?',
        },
        {
          type: 'input',
          name: 'engineeremail',
          message: 'What is the email id of the engineer?',
        },

        {
          type: 'input',
          name: 'github_name',
          message: 'What is engineers github username?',
        },
        {
          type: 'input',
          name: 'iname',
          message: 'What is the name of the intern?',
        },
        {
          type: 'input',
          name: 'iemail',
          message: 'What is the email id of the intern?',
        },
        {
          type: 'input',
          name: 'internid',
          message: 'What is intern id?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'which school intern is attending?',
        },
       
      ]).then((useranswers) => {
        console.log(useranswers)
        //   const readmePageContent =generateHTMLFile(useranswers);
        const HTMLPageContent= generateHTML(useranswers)
        //console.log(generateMarkdown(useranswers))

        //writefile fuction to write the answers given by the user to the prompt to the README file
        fs.writeFile('./Dist/Output/Index.html', HTMLPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created Index.html!')
        );
      });
  }

  // A function to initialize app
  function init() {
    generateHTMLFile()

  }

  // Function call to initialize app
  init();
