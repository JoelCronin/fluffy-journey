const { isTypedArray } = require("util/types")
const classes = require("../js/classes")

describe("Employee", () => {
   //All tests for creating a new employee
   describe("Initialisation", () => {
    it("should create a new employee object with a name, id and email", () =>{
        const employee = new classes.Employee("Joel", 1, "joel@test.com")

        expect(employee.name).toEqual("Joel");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("joel@test.com")
    })

    it("should throw an error if provided no arguments", () => {
        const cb = () => new classes.Employee();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });
    
      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new classes.Employee(3, 1, "joel@test.com");
        const err = new Error("Name should be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'id' is not a positive number", () => {
        const cb = () => new classes.Employee("Joel", "number2", "joel@test.com");
        const err = new Error("Id should be a positive number");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'email' does not include an @ symbol", () => {
        const cb = () => new classes.Employee("Joel", 1, "joeltest.com");
        const err = new Error("Email should be in valid format");
  
        expect(cb).toThrowError(err);
      });

      it("employee.getname() should return the employee name", () => {
        const employee = new classes.Employee("Joel", 1, "joel@test.com")
        expect(employee.getName()).toEqual("Joel");
      });

      it("employee.getID() should return the ID", () => {
        const employee = new classes.Employee("Joel", 1, "joel@test.com")
        expect(employee.getID()).toEqual(1);
      });
      it("employee.getEmail() should return employee email", () => {
        const employee = new classes.Employee("Joel", 1, "joel@test.com")
        expect(employee.getEmail()).toEqual("joel@test.com");
      });
      it("employee.getRole() should return 'employee' ", () => {
        const employee = new classes.Employee("Joel", 1, "joel@test.com")
        expect(employee.getRole()).toEqual("Employee");
      });
   }) 
})