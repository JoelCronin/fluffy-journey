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

    it("When new manager is crearted all data should be saved in correct type", () =>{
      const manager = new classes.Manager("Joel", 1, "joel@test.com", 4)

      expect(typeof manager).toBe("object")
      expect(typeof manager.name).toBe("string");
      expect(typeof manager.id).toBe("number");
      expect(typeof manager.email).toBe("string")
      expect(typeof manager.officeNum).toBe("number")
  })

  
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