import { Injectable } from "@nestjs/common";
import { AlgorithmInterface } from "../../context/algorithm.interface";
import { Observable } from "rxjs";

@Injectable()
export class ComplexVoucherService implements AlgorithmInterface {
  generateCode(voucherLength: number) {
    const complexPrefix = "000000";
    const prefixLength = complexPrefix.length;
    const codes: Array<string> = [];
    for (let code = 1; code <= voucherLength; code++) {
      if (code <= 100000) {
        codes.push(
          this._randomAlphabets() +
            "-" +
            complexPrefix.substring(0, prefixLength - code.toString().length) +
            code
        );
      }
    }

    return new Observable((observer) => {
      observer.next(codes);
    });
  }

  _randomAlphabets() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mnemonics = "";
    for (let j = 0; j < 8; j++) {
      mnemonics += alphabets.charAt(
        Math.floor(Math.random() * alphabets.length)
      );
    }
    return mnemonics;
  }
}
