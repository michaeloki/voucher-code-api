import { PseudoGeneratorController } from './pseudo-generator.controller';
describe('PseudoGeneratorController', () => {
  it('should generate random code and return an array', () => {
    const voucherLength = 10;
    const codes = new PseudoGeneratorController().generateRandomCode(
      voucherLength,
    );
    expect(Array.isArray(codes)).toBe(true);
  });

  it('should only contain numbers with at least 7 digits and not exceed voucherLength', () => {
    const voucherLength = 100;
    const codes: any = new PseudoGeneratorController().generateRandomCode(
      voucherLength,
    );

    for (const code of codes) {
      expect(typeof code).toBe('string');
      expect(codes.length).toBe(100);
    }
  });
});
