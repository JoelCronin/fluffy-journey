const { isTypedArray } = require("util/types")
const classes = require("../js/classes")

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

    it("When new intern is crearted all data should be saved in correct type", () =>{
      const intern = new classes.Intern("Joel", 1, "joel@test.com", "Yale")

      expect(typeof intern).toBe("object")
      expect(typeof intern.name).toBe("string");
      expect(typeof intern.id).toBe("number");
      expect(typeof intern.email).toBe("string")
      expect(typeof intern.school).toBe("string")
  })

      it("intern.getRole() should return 'Intern' ", () => {
        const intern = new classes.Intern("Joel", 1, "joel@test.com", "Yale")
        expect(intern.getRole()).toEqual("Intern");
      });

      it("intern.getSchool() should return the fourth argument in the function", () => {
        const intern = new classes.Intern("Joel", 1, "joel@test.com", "Yale")
        expect(intern.getSchool()).toEqual("Yale");
      });

      it("intern.getname() should return the employee name", () => {
        const intern = new classes.Intern("Joel", 1, "joel@test.com", 4)
        expect(intern.getName()).toEqual("Joel");
      });

      it("engineer.getID() should return the ID", () => {
        const intern = new classes.Intern("Joel", 1, "joel@test.com", 4)
        expect(intern.getID()).toEqual(1);
      });
      it("engineer.getEmail() should return the email", () => {
        const intern = new classes.Intern("Joel", 1, "joel@test.com", 4)
        expect(intern.getEmail()).toEqual("joel@test.com");
      });


   }) 
})