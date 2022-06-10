const fileQuestions = require("./questions")
const inquirer = require("inquirer");
const fs = require('fs');


function Employee(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email
    this.getName = () => {
        console.log(`My name is ${this.name}`)
    }
    this.getID = () => {
        console.log(`My ID is ${this.id}`)
    }
    this.getEmail = () => {
        console.log(`My name is ${this.email}`)
    }
    this.getRole = () => {
        console.log(`I am an Employee`)
    }
}

function askManagerQuestions(){
  inquirer.prompt(fileQuestions.managerQuestions)
  .then((answers) => {
    console.log(answers);
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
    askEmployeeTypeQuestion();
  })
}

function askInternQuestions(){
  inquirer.prompt(fileQuestions.internQuestions)
  .then((answers) => {
    console.log(answers);
    askEmployeeTypeQuestion();
  })
}

function renderHTML (){
  console.log("finished")
}


askManagerQuestions()

