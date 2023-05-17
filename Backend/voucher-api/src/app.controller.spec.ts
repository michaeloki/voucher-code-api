import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController;
  let appService;

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe("getHello", () => {
    it("should return a string", () => {
      expect(typeof appController.getHello()).toEqual("string");
    });
  });

  describe("getVouchers", () => {
    it("should return an object", async () => {
      const result = await appController.getVouchers();
      expect(typeof result).toEqual("object");
    });
  });
});
