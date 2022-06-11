// Imports
const fileQuestions = require("./questions")
const fileClasses = require("./classes")
const inquirer = require("inquirer");
const fs = require('fs');

var employeeArray = []

function askManagerQuestions(){
  inquirer.prompt(fileQuestions.managerQuestions)
  .then((answers) => {
    // console.log(answers);
    manager = new fileClasses.Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
    // console.log(manager)
    employeeArray.push(manager)
    console.log(employeeArray)
    askEmployeeTypeQuestion();
  })
}


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

function askEngineerQuestions(){
  inquirer.prompt(fileQuestions.engineerQuestions)
  .then((answers) => {
    console.log(answers);
    engineer = new fileClasses.Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGitHub)
    employeeArray.push(engineer)
    console.log(employeeArray)
    askEmployeeTypeQuestion();
  })
}

function askInternQuestions(){
  inquirer.prompt(fileQuestions.internQuestions)
  .then((answers) => {
    console.log(answers);
    intern = new fileClasses.Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
    employeeArray.push(intern)
    console.log(employeeArray)
    askEmployeeTypeQuestion();
  })
}

function renderHTML (){
  console.log("finished")
}


askManagerQuestions()

// let employee1 = new fileClasses.Employee("Joel", 6, "123@test")
// let employee2 = new fileClasses.Engineer("Soph", 8, "456@test")
// let employee3 = new fileClasses.Manager("Frank", 2, "789@test")

// employee3.getEmail()

