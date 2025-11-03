import { calculate } from '../src/calculator';

describe('calculate()', () => {
  test('should add two numbers correctly', () => {
    expect(calculate(5, 3, 'add')).toBe(8);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculate(10, 4, 'subtract')).toBe(6);
  });

  test('should handle division by zero', () => {
    expect(calculate(10, 0, 'divide')).toBe('Error: Division by zero');
  });
});