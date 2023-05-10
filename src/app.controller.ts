import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/status')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/getVouchers')
  async getVouchers(): Promise<any> {
    return await this.appService.getVouchers();
  }
}
