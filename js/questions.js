//Questions asked to User
const managerQuestions = [
    {
        name: "managerName",
        message: "What is the name of the manager of this team?",
        type: "input",
        validate: (answer)  => {
          const nameParse = parseInt(answer)
          if(!isNaN(nameParse) || answer === ""){
            return "Name should be a non-empty string"
          } else {
            return true
          }
        }
      },
      {
        name: "managerID",
        message: "What is the manager's ID number?",
        type: "input", 
        validate: (answer)  => {
          const idParse = parseInt(answer)
          if(isNaN(idParse) || answer === "" || idParse < 0 ){
            return "Id should be a positive number"
          } else {
            return true
          }
        }
      },
      {
        name: "managerEmail",
        message: "What is the managers email?",
        type: "input",
        validate: (answer)  => {
          const checkEmail = answer.includes("@")
          if(checkEmail === false || answer === ""){
            return "Email should be in valid format"
          } else {
            return true
          }
        }
         
      },
      {
        name: "managerOffice",
        message: "What is the managers office number?",
        type: "input", 
        validate: (answer)  => {
          const officeParse = parseInt(answer)
          if(isNaN(officeParse) || answer === "" || officeParse < 0 ){
            return "Office Number should be a positive number"
          } else {
            return true
          }
        }
      },  
];

const employeeTypeQuestion = [
    {
        name: "nextEmployee",
        message: "Would you like to add any further employees?",
        type: "list",
        choices: ["Engineer", "Intern", "No, I am finished"]
        },
]

const engineerQuestions = [
    {
        name: "engName",
        message: "What is the name of this engineer?",
        type: "input",
        validate: (answer)  => {
          const nameParse = parseInt(answer)
          if(!isNaN(nameParse) || answer === ""){
            return "Name should be a non-empty string"
          } else {
            return true
          }
        }
      },
      {
        name: "engID",
        message: "What is this engineer's ID number?",
        type: "input" ,
        validate: (answer)  => {
          const idParse = parseInt(answer)
          if(isNaN(idParse) || answer === "" || idParse < 0 ){
            return "Id should be a positive number"
          } else {
            return true
          }
        }
      },
      {
        name: "engEmail",
        message: "What is this engineer's email?",
        type: "input",
        type: "input",
        validate: (answer)  => {
          const checkEmail = answer.includes("@")
          if(checkEmail === false || answer === ""){
            return "Email should be in valid format"
          } else {
            return true
          }
        } 
      },
      {
        name: "engGitHub",
        message: "What is this engineer's GitHub profile tag?",
        type: "input",
        validate: (answer)  => {
          if(answer === ""){
            return "GitHub profile cannot be empty"
          } else {
            return true
          }
        } 
      },  
];

const internQuestions = [
    {
        name: "internName",
        message: "What is the name of this intern?",
        type: "input",
        validate: (answer)  => {
          const nameParse = parseInt(answer)
          if(!isNaN(nameParse) || answer === ""){
            return "Name should be a non-empty string"
          } else {
            return true
          }
        }
      },
      {
        name: "internID",
        message: "What is this intern's ID number?",
        type: "input",
        validate: (answer)  => {
          const idParse = parseInt(answer)
          if(isNaN(idParse) || answer === "" || idParse < 0 ){
            return "Id should be a positive number"
          } else {
            return true
          }
        } 
      },
      {
        name: "internEmail",
        message: "What is this intern's email?",
        type: "input",
        validate: (answer)  => {
          const checkEmail = answer.includes("@")
          if(checkEmail === false || answer === ""){
            return "Email should be in valid format"
          } else {
            return true
          }
        }  
      },
      {
        name: "internSchool",
        message: "What school did this Intern go to?",
        type: "input",
        validate: (answer)  => {
          if(answer === ""){
            return "School information cannot be empty"
          } else {
            return true
          }
        }  
      },  
];

module.exports = {
    internQuestions,
    engineerQuestions,
    managerQuestions,
    employeeTypeQuestion
}