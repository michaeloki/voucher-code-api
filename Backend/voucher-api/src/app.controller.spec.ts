import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ComplexVoucherService } from "./services/complex-voucher/complex-voucher.service";
import { SimpleVoucherService } from "./services/simple-voucher/simple-voucher.service";

describe("AppController", () => {
  let appController;
  let complexVoucherService: ComplexVoucherService;
  let simpleVoucherService: SimpleVoucherService;

  beforeEach(() => {
    appController = new AppController(
      new AppService(complexVoucherService, simpleVoucherService)
    );
  });

  it("should return 'Hello World!'", () => {
    expect(appController.getHello()).toEqual("Hello World!");
  });
});
