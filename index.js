//Questions asked to User
const managerQuestions = [
    {
        name: "managerName",
        message: "What is the name of the manager of this team?",
        type: "input"
      },
      {
        name: "managerID",
        message: "What is the manager's ID number?",
        type: "input" 
      },
      {
        name: "managerEmail",
        message: "What is the managers email?",
        type: "input" 
      },
      {
        name: "managerOffice",
        message: "What is the managers office number?",
        type: "input" 
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
        type: "input"
      },
      {
        name: "engID",
        message: "What is this engineer's ID number?",
        type: "input" 
      },
      {
        name: "engEmail",
        message: "What is this engineer's email?",
        type: "input" 
      },
      {
        name: "engGitHub",
        message: "What is this engineer's GitHub profile tag?",
        type: "input" 
      },  
];

const internQuestions = [
    {
        name: "internName",
        message: "What is the name of this intern?",
        type: "input"
      },
      {
        name: "internID",
        message: "What is this intern's ID number?",
        type: "input" 
      },
      {
        name: "internEmail",
        message: "What is this intern's email?",
        type: "input" 
      },
      {
        name: "InternGitHub",
        message: "What is this Intern's GitHub profile tag?",
        type: "input" 
      },  
];


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

