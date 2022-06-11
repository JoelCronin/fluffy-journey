class Employee{
constructor (name, id, email){
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
    constructor(name, id, email, extra){
     super(name, id, email)
     this.extra = extra;
    }
    getRole = () => {
        console.log(`I am a Manager`)
        return "Manager"
    }
}

class Engineer extends Employee{
    constructor (name, id, email, extra){
        super(name, id, email)
        this.extra = extra
    }
    getGitHub = () => {
        console.log(`My GItHub is ${this.extra}`)
        return this.extra
    }
    getRole = () => {
        console.log(`I am an Engineer`)
        return "Engineer"
    }
}

class Intern extends Employee{
    constructor(name, id, email, extra){
        super(name, id, email)
        this.extra = extra
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