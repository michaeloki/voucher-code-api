import { PseudoGeneratorController } from '../strategies/algorithms/pseudo-generator/pseudo-generator.controller';
import { ComplexVoucherController } from '../strategies/algorithms/complex-voucher/complex-voucher.controller';

export class StrategyManager {
  private pseudoGenerator: PseudoGeneratorController =
    new PseudoGeneratorController();
  private complexVoucher: ComplexVoucherController =
    new ComplexVoucherController();

  async algorithmSelector(
    name: string,
    algorithmType: string,
    voucherQuantity: number,
  ): Promise<any> {
    let vouchers;
    if (name === 'vouchers') {
      if (algorithmType.toLowerCase() === 'sequentialnumbers') {
        vouchers = this.pseudoGenerator.generateRandomCode(voucherQuantity);
      }
      if (algorithmType.toLowerCase() === 'complexvouchers') {
        vouchers = this.complexVoucher.generateComplexCode(voucherQuantity);
      }
    }
    return vouchers;
  }
}
