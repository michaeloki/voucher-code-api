import { Test, TestingModule } from "@nestjs/testing";
import { SimpleVoucherService } from "./simple-voucher.service";

describe("SimpleVoucherService", () => {
  let service: SimpleVoucherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleVoucherService],
    }).compile();

    service = module.get<SimpleVoucherService>(SimpleVoucherService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should generate 5 voucher codes", (done) => {
    const voucherQuantity = 5;
    const expectedCodes = ["000001", "000002", "000003", "000004", "000005"];

    service.generateCode(voucherQuantity).subscribe((codes) => {
      expect(codes).toEqual(expectedCodes);
      done();
    });
  });
});
