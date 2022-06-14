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
        return this.name
    }
    getID = () => {
        return this.id
    }
    getEmail = () => {
        return this.email
    }
    getRole = () => {
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
        return "Manager"
    }
}

class Engineer extends Employee{
    constructor (name, id, email, gitHub){
        if(gitHub === ""){
            throw new Error ("GitHub profile cannot be empty");
          }
        super(name, id, email)
        this.gitHub = gitHub
    }

    getGitHub = () => {
        return this.gitHub
    }
    getRole = () => {
        return "Engineer"
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        if( school === ""){
            throw new Error ("School information cannot be empty");
          }

        super(name, id, email)
        this.school = school
    }
    getSchool = () => {
        return this.school
    }
    getRole = () => {
        return "Intern"
    }
}


module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}