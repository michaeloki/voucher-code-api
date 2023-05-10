import { StrategyManager } from './strategyManager';

describe('StrategyManager', () => {
  let strategyManager: StrategyManager;
  beforeEach(() => {
    strategyManager = new StrategyManager();
  });

  it('should generate vouchers for sequential numbers', async () => {
    const quantity = 5;
    const result = await strategyManager.algorithmSelector(
      'vouchers',
      'sequentialnumbers',
      quantity,
    );
    expect(result.length).toBe(quantity);
    for (let i = 1; i < result.length; i++) {
      expect(parseInt(result[i], 10)).toBe(parseInt(result[i - 1], 10) + 1);
    }
  });

  it('should generate vouchers for complex codes', async () => {
    const quantity = 5;
    const result = await strategyManager.algorithmSelector(
      'vouchers',
      'complexvouchers',
      quantity,
    );
    expect(result.length).toBe(quantity);
    for (let i = 0; i < result.length; i++) {
      expect(result[i].match(/[a-zA-Z]+/)).toBeTruthy();
      expect(result[i].match(/[0-9]+/)).toBeTruthy();
      expect(result[i].length).toBeGreaterThanOrEqual(8);
      expect(result[i].length).toBeLessThanOrEqual(15);
    }
  });
});
