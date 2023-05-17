import { Injectable } from "@nestjs/common";
import { AlgorithmInterface } from "../../context/algorithm.interface";
import { Observable } from "rxjs";

@Injectable()
export class SimpleVoucherService implements AlgorithmInterface {
  generateCode(voucherQuantity: number) {
    const prefix = "000000";
    const prefixLength = prefix.length;
    const codes: Array<string> = [];
    for (let code = 1; code <= voucherQuantity; code++) {
      if (code <= 100000) {
        codes.push(
          prefix.substring(0, prefixLength - code.toString().length) + code
        );
      } else {
        codes.push(String(code));
      }
    }

    return new Observable((observer) => {
      observer.next(codes);
    });
  }
}
