// Imports
const fileQuestions = require("./questions")
const fileClasses = require("./classes")
const inquirer = require("inquirer");
const fs = require('fs');

var employeeArray = []
// const box = document.getElementById("box")

//Asks initial Manager questions, pushes answers into employeeArray and then triggers next stage of questions
function askManagerQuestions(){
  inquirer.prompt(fileQuestions.managerQuestions)
  .then((answers) => {
    // console.log(answers);
    manager = new fileClasses.Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
    // console.log(manager)
    manager.role = "Manager"
    manager.third = `Office no: ${answers.managerOffice}`
    employeeArray.push(manager)
    console.log(employeeArray)
    askEmployeeTypeQuestion();
  })
}

//Asks the question as to what type of employee to add next or to finish questions
function askEmployeeTypeQuestion(){
  inquirer.prompt(fileQuestions.employeeTypeQuestion)
  .then((answer) => {
    console.log(answer);
    if(answer.nextEmployee === "Engineer"){
      askEngineerQuestions();
    } else if (answer.nextEmployee === "Intern"){
      askInternQuestions();
    } else {
      renderHTML();
    }
  })
}
//Asks the engineer questions, pushes answers into employeeArray and then triggers next stage of questions
function askEngineerQuestions(){
  inquirer.prompt(fileQuestions.engineerQuestions)
  .then((answers) => {
    console.log(answers);
    engineer = new fileClasses.Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGitHub)
    engineer.role = "Engineer"
    engineer.third = `GitHub: <a href="https://github.com/${answers.engGitHub}">${answers.engGitHub}</a>`
    employeeArray.push(engineer)
    console.log(employeeArray)
    askEmployeeTypeQuestion();
  })
}
//Asks the intern questions, pushes answers into employeeArray and then triggers next stage of questions
function askInternQuestions(){
  inquirer.prompt(fileQuestions.internQuestions)
  .then((answers) => {
    console.log(answers);
    intern = new fileClasses.Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
    intern.role = "Intern"
    intern.third = `School: ${answers.internSchool}`
    employeeArray.push(intern)
    console.log(employeeArray)
    askEmployeeTypeQuestion();
  })
}

function renderHTML (){
  console.log("finished")
  results = employeeArray
  HTMLArray = []

  for(let i=0; i < results.length; i++){
var cards = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${results[i].name}</h5>
      <p class="card-text">${results[i].role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ID: ${results[i].id}</li>
      <li class="list-group-item"> Email: <a href="mailto:${results[i].email}">${results[i].email}</a></li>
      <li class="list-group-item">${results[i].third} </li>
    </ul>
  </div>
  `
HTMLArray.push(cards)
}

var string = HTMLArray.toString()
var noCommas = string.replaceAll(',', '')

fs.writeFile('index2.html',`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Employee Tree</title>
</head>
<body>
    <header>
        <div class="jumbotron jumbotron-fluid bg-primary">
            <div class="container ">
              <h1 class="display-4">My Work Team</h1>
              <p class="lead">A Simplified Representation of my Colleagues and their Roles</p>
            </div>
          </div>
    </header>
    <section>
        <div class="box-3">
            <div id="box" class="box-2"></div>
        </div>
        ${noCommas}
    </section>
    <script src="./index.js"></script>
</body>
</html>
`, (err) =>
err ? console.error(err) : console.log('Commit logged!'))
}


askManagerQuestions()



