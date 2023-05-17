import { Test, TestingModule } from "@nestjs/testing";
import { ComplexVoucherService } from "./complex-voucher.service";

describe("ComplexVoucherService", () => {
  let service: ComplexVoucherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplexVoucherService],
    }).compile();

    service = module.get<ComplexVoucherService>(ComplexVoucherService);
    service.generateCode(15);
  });

  it("should be defined", () => {
    expect(service.generateCode(10)).toBeDefined();
  });

  it("should return an observable of an array of strings", (done) => {
    const observer = {
      next: (value: Array<string>) => {
        expect(Array.isArray(value)).toBe(true);

        value.forEach((code) => {
          expect(typeof code).toBe("string");
          expect(code.split("-")[0]).toMatch(/[A-Z]{8}/);
          expect(code.split("-")[1]).toMatch(/\d{6}/);
        });
        done();
      },
    };

    const length = 100000;
    const result = service.generateCode(length);
    result.subscribe(observer);
  });
});
