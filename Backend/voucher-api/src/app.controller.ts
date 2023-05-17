import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get("/api/status")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/api/getComplexVoucher/:quantity")
  async getComplexVoucher(@Param("quantity") quantity: number) {
    let apiResponse: object;
    await this.appService.generateComplexVouchers(quantity).then((response) => {
      apiResponse = response;
    });
    return apiResponse;
  }

  @Get("/api/getSimpleVoucher/:quantity")
  async getSimpleVoucher(@Param("quantity") quantity: number) {
    let apiResponse: object;
    await this.appService.generateSimpleVouchers(quantity).then((response) => {
      apiResponse = response;
    });
    return apiResponse;
  }
}
