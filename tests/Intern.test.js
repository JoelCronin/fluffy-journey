const { isTypedArray } = require("util/types")
const classes = require("../classes")

describe("Intern", () => {
   //All tests for creating a new manager
   describe("Initialisation", () => {
    it("should create a new intern object with a name, id, email and School info", () =>{
        const intern = new classes.Intern("Joel", 1, "joel@test.com", "Yale")

        expect(intern.name).toEqual("Joel");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual("joel@test.com")
        expect(intern.school).toEqual("Yale")
    })

    it("should throw an error if provided no arguments", () => {
        const cb = () => new classes.Intern();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });
    
      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new classes.Intern(3, 1, "joel@test.com", "Yale");
        const err = new Error("Name should be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'id' is not a positive number", () => {
        const cb = () => new classes.Intern("Joel", "number2", "joel@test.com", "Yale");
        const err = new Error("Id should be a positive number");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'email' does not include an @ symbol", () => {
        const cb = () => new classes.Intern("Joel", 1, "joeltest.com", "Yale");
        const err = new Error("Email should be in valid format");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'School' is not a string", () => {
        const cb = () => new classes.Intern("Joel", 1, "joel@test.com", 3);
        const err = new Error("School information should be a non-empty string");
  
        expect(cb).toThrowError(err);
      });


   }) 
})