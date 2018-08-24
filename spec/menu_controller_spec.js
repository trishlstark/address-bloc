const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

    beforeEach(() => {
      this.menu = new MenuController();
    });
    

    describe("remindMe()", () => {

      it("should return Learning is a life-long pursuit when remindMe is called", () => {
        expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
      });
    });
    
  });
 