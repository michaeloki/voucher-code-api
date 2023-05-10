import { Controller } from '@nestjs/common';
import { AlgorithmInterface } from '../../../context/algorithm.interface';

@Controller('pseudo-generator')
export class ComplexVoucherController {
  generateComplexCode(voucherLength: number): AlgorithmInterface {
    const complexPrefix = '000000';
    const prefixLength = complexPrefix.length;
    const codes: any = [];
    for (let code = 1; code <= voucherLength; code++) {
      if (code <= 100000) {
        codes.push(
          this._randomAlphabets() +
          '-' +
          complexPrefix.substring(0, prefixLength - code.toString().length) +
          code,
        );
      }
    }
    return codes;
  }

  _randomAlphabets() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let mnemonics = '';
    for (let j = 0; j < 8; j++) {
      mnemonics += alphabets.charAt(
        Math.floor(Math.random() * alphabets.length),
      );
    }
    return mnemonics;
  }
}
