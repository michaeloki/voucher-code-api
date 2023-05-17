import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ComplexVoucherService } from "./services/complex-voucher/complex-voucher.service";
import { SimpleVoucherService } from "./services/simple-voucher/simple-voucher.service";

const mockService = {
  getHello: jest.fn(() => "Hello World!"),
  generateComplexVouchers: jest.fn(),
  generateSimpleVouchers: jest.fn(),
};
describe("AppController", () => {
  let appController;
  let appService;
  let complexVoucherService: ComplexVoucherService;
  let simpleVoucherService: SimpleVoucherService;

  beforeEach(() => {
    appController = new AppController(
      new AppService(complexVoucherService, simpleVoucherService)
    );
  });

  // beforeEach(() => {
  //   appService = new AppService();
  //   appController = new AppController(appService);
  // });
  it("should return 'Hello World!'", () => {
    expect(appController.getHello()).toEqual("Hello World!");
  });

  describe("getVouchers", () => {
    it("should return an object", async () => {
      const result = await appController.result();
      console.log("result is ", result);
      expect(typeof result).toEqual("object");
    });
  });
});
