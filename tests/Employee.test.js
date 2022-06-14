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