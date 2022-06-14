const { isTypedArray } = require("util/types")
const classes = require("../js/classes")

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

    it("When new engineer is crearted all data should be saved in correct type", () =>{
      const engineer = new classes.Engineer("Joel", 1, "joel@test.com", "JoelCronin")

      expect(typeof engineer).toBe("object")
      expect(typeof engineer.name).toBe("string");
      expect(typeof engineer.id).toBe("number");
      expect(typeof engineer.email).toBe("string")
      expect(typeof engineer.gitHub).toBe("string")
  })


      it("engineer.getRole() should return 'Engineer' ", () => {
        const engineer = new classes.Engineer("Joel", 1, "joel@test.com", "JoelCronin")
        expect(engineer.getRole()).toEqual("Engineer");
      });

      it("engineer.getGitHub() should return the engineer GItHub", () => {
        const engineer = new classes.Engineer("Joel", 1, "joel@test.com", "JoelCronin")
        expect(engineer.getGitHub()).toEqual("JoelCronin");
      });

      it("engineer.getname() should return the employee name", () => {
        const engineer = new classes.Engineer("Joel", 1, "joel@test.com", 4)
        expect(engineer.getName()).toEqual("Joel");
      });

      it("engineer.getID() should return the ID", () => {
        const engineer = new classes.Engineer("Joel", 1, "joel@test.com", 4)
        expect(engineer.getID()).toEqual(1);
      });
      it("engineer.getEmail() should return the email", () => {
        const engineer = new classes.Engineer("Joel", 1, "joel@test.com", 4)
        expect(engineer.getEmail()).toEqual("joel@test.com");
      });


   }) 
})