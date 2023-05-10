import { Controller } from '@nestjs/common';
import { AlgorithmInterface } from '../../../context/algorithm.interface';

@Controller('pseudo-generator')
export class PseudoGeneratorController {
  generateRandomCode(voucherLength: number): AlgorithmInterface {
    const prefix = '000000';
    const prefixLength = prefix.length;
    const codes: any = [];
    for (let code = 1; code <= voucherLength; code++) {
      if (code <= 100000) {
        codes.push(
          prefix.substring(0, prefixLength - code.toString().length) + code,
        );
      } else {
        codes.push(code);
      }
    }
    return codes;
  }
}
