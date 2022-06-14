const { isTypedArray } = require("util/types")
const classes = require("../js/classes")
const index = require("../index")

describe("Manager", () => {
   //All tests for creating a new manager
   describe("Initialisation", () => {
    it("should create a new Manager object with a name, id, email and officeNumber", () =>{
        const manager = new classes.Manager("Joel", 1, "joel@test.com", 4)

        expect(manager.name).toEqual("Joel");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual("joel@test.com")
        expect(manager.officeNum).toEqual(4)
    })

    it("should throw an error if provided no arguments", () => {
        const cb = () => new classes.Manager();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });
    
      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new classes.Manager(3, 1, "joel@test.com", 4);
        const err = new Error("Name should be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'id' is not a positive number", () => {
        const cb = () => new classes.Manager("Joel", "number2", "joel@test.com", 4);
        const err = new Error("Id should be a positive number");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'email' does not include an @ symbol", () => {
        const cb = () => new classes.Manager("Joel", 1, "joeltest.com", 4);
        const err = new Error("Email should be in valid format");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'officeNum' is not a positive number", () => {
        const cb = () => new classes.Manager("Joel", 1, "joel@test.com", "number2");
        const err = new Error("Office Number should be a positive number");
  
        expect(cb).toThrowError(err);
      });

      it("manager.getRole() should return 'Manager' ", () => {
        const manager = new classes.Manager("Joel", 1, "joel@test.com", 4)
        expect(manager.getRole()).toEqual("Manager");
      });

      it("manager.getname() should return the employee name", () => {
        const manager = new classes.Manager("Joel", 1, "joel@test.com", 4)
        expect(manager.getName()).toEqual("Joel");
      });

      it("manager.getID() should return the ID", () => {
        const manager = new classes.Manager("Joel", 1, "joel@test.com", 4)
        expect(manager.getID()).toEqual(1);
      });
      it("manager.getEmail() should return the email", () => {
        const manager = new classes.Manager("Joel", 1, "joel@test.com", 4)
        expect(manager.getEmail()).toEqual("joel@test.com");
      });
   }) 
})