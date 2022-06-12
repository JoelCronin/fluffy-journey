const { isTypedArray } = require("util/types")
const classes = require("../classes")

describe("Engineer", () => {
   //All tests for creating a new manager
   describe("Initialisation", () => {
    it("should create a new engineer object with a name, id, email and GitHub link", () =>{
        const engineer = new classes.Engineer("Joel", 1, "joel@test.com", "JoelCronin")

        expect(engineer.name).toEqual("Joel");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual("joel@test.com")
        expect(engineer.gitHub).toEqual("JoelCronin")
    })

    it("should throw an error if provided no arguments", () => {
        const cb = () => new classes.Engineer();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });
    
      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new classes.Engineer(3, 1, "joel@test.com", "JoelCronin");
        const err = new Error("Name should be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'id' is not a positive number", () => {
        const cb = () => new classes.Engineer("Joel", "number2", "joel@test.com", "JoelCronin");
        const err = new Error("Id should be a positive number");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'email' does not include an @ symbol", () => {
        const cb = () => new classes.Engineer("Joel", 1, "joeltest.com", "JoelCronin");
        const err = new Error("Email should be in valid format");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'GitHub' is not a string", () => {
        const cb = () => new classes.Engineer("Joel", 1, "joel@test.com", 3);
        const err = new Error("GitHub profile should be a non-empty string");
  
        expect(cb).toThrowError(err);
      });


   }) 
})