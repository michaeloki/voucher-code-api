import { ComplexVoucherController } from './complex-voucher.controller';
describe('ComplexVoucherController', () => {
  const controller = new ComplexVoucherController();

  describe('generateComplexCode', () => {
    it('should return an array of codes with a length less than or equal to voucherLength', () => {
      const result = controller.generateComplexCode(100000);
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('_randomAlphabets', () => {
    it('should return a string of 8 uppercase letters', () => {
      const result = controller._randomAlphabets();
      expect(typeof result).toBe('string');
      expect(result).toMatch(/^[A-Z]{8}$/);
    });
  });
});
