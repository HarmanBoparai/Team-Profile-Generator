// Packages for this application 
const inquirer=require('inquirer');
const fs=require('fs');
const generateHTML=require('./generateHTML');

const generateHTMLfile=() =>{
    inquirer
    .prompt([
        const generateHTMLfile=() =>{
            inquirer
            .prompt([
              {
                type: 'input',
                name: 'team member info',
                message: 'Please add team member information?',
              },
              {
                type: 'input',
                name: 'email',
                message: 'Do you want to include your email?',
              },
              {
                type: 'input',
                name: 'github_name',
                message: 'Enter your github username?',
              },
              {
                type: 'input',
                 name: 'Manager info',
                message: 'Please add manager information?',
              },
              {
                type: 'list',
                name: 'Team Building',
                message: 'Do you like to build a team?',
                choices: ["Engineer","Intern"]
              },
              {
                type: 'input',
                name: 'Engineer Info',
                message: 'Please add an engineer info?',
              },
              {
                type: 'input',
                name: 'Intern Info',
                message:'Please add an Intern info?',
              },
        {
            type: 'list',
            name: 'TeamMember',
            message: 'Would do you like another team member?',
            choices: ["Yes","No"]
          },
        ]).then((useranswers) =>{
            console.log(useranswers)
          //   const readmePageContent =generateHTMLFile(useranswers);
          const readmePageContent=generateHTML(useranswers)
           //console.log(generateMarkdown(useranswers))
        
           //writefile fuction to write the answers given by the user to the prompt to the README file
           fs.writeFile('./Dist/Output/Index.html',readmePageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created Index.html!')
          );
          });
        }
        
