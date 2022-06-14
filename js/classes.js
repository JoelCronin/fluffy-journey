//Employee Super Class
class Employee{
constructor (name, id, email){

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

// Manager Sub-class
class Manager extends Employee{
    constructor(name, id, email, officeNum){
     super(name, id, email)
     this.officeNum = officeNum;
    }
    getRole = () => {
        return "Manager"
    }
}

// Engineer Sub-class
class Engineer extends Employee{
    constructor (name, id, email, gitHub){
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

// Intern Sub-class
class Intern extends Employee{
    constructor(name, id, email, school){

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