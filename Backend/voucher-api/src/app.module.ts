import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ComplexVoucherService } from "./services/complex-voucher/complex-voucher.service";
import { SimpleVoucherService } from "./services/simple-voucher/simple-voucher.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ComplexVoucherService, SimpleVoucherService],
})
export class AppModule {}
