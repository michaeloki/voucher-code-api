import { Injectable } from "@nestjs/common";
import { ComplexVoucherService } from "./services/complex-voucher/complex-voucher.service";
import { SimpleVoucherService } from "./services/simple-voucher/simple-voucher.service";

@Injectable()
export class AppService {
  constructor(
    private complexVoucherService: ComplexVoucherService,
    private simpleVoucherService: SimpleVoucherService
  ) {}
  getHello(): string {
    return "Hello World!";
  }

  async generateComplexVouchers(quantity: number) {
    let complexVouchers;
    await this.complexVoucherService
      .generateCode(quantity)
      .subscribe((response) => {
        complexVouchers = response;
      });
    return complexVouchers;
  }

  async generateSimpleVouchers(quantity: number) {
    let simpleVouchers;
    await this.simpleVoucherService
      .generateCode(quantity)
      .subscribe((response) => {
        simpleVouchers = response;
      });
    return simpleVouchers;
  }
}
