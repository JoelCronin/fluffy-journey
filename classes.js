class Employee{
constructor (name, id, email){
   const nameParse = parseInt(name)
   const idParse =  parseInt(id)
   const checkEmail = email.includes("@")

    if(!isNaN(nameParse) || name === ""){
      throw new Error ("Name should be a non-empty string");
    }

    if(typeof idParse !== "number" || isNaN(idParse) || idParse < 0){
      throw new Error ("Id should be a positive number");
    }

    if(typeof email !== "string" || email ==="" || checkEmail === false ){
        throw new Error ("Email should be in valid format");
      }

    this.name = name;
    this.id = id;
    this.email = email
    }
    getName = () => {
        console.log(`My name is ${this.name}`)
        return this.name
    }
    getID = () => {
        console.log(`My ID is ${this.id}`)
        return this.id
    }
    getEmail = () => {
        console.log(`My email is ${this.email}`)
        return this.email
    }
    getRole = () => {
        console.log(`I am an Employee`)
        return "Employee"
    }
}

class Manager extends Employee{
    constructor(name, id, email, officeNum){
    const officeParse = parseInt(officeNum)

    if(typeof officeParse !== "number" || isNaN(officeParse) || officeParse < 0){
        throw new Error ("Office Number should be a positive number");
      }
     super(name, id, email)
     this.officeNum = officeNum;
    }

    getRole = () => {
        console.log(`I am a Manager`)
        return "Manager"
    }
}

class Engineer extends Employee{
    constructor (name, id, email, gitHub){
        const gitHubParse = parseInt(gitHub)

        if(!isNaN(gitHubParse) || gitHub === ""){
            throw new Error ("GitHub profile should be a non-empty string");
          }
        super(name, id, email)
        this.gitHub = gitHub
    }

    getGitHub = () => {
        console.log(`My GitHub is ${this.gitHub}`)
        return this.gitHub
    }
    getRole = () => {
        console.log(`I am an Engineer`)
        return "Engineer"
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
    const schoolParse = parseInt(school) 
        if(!isNaN(schoolParse) || school === ""){
            throw new Error ("School information should be a non-empty string");
          }

        super(name, id, email)
        this.school = school
    }
    getSchool = () => {
        return this.extra
    }
    getRole = () => {
        console.log(`I am an Intern`)
        return "Intern"
    }
}


module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}