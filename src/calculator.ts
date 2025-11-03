// Simple calculator for QA testing demo
export function calculate(a: number, b: number, operation: 'add' | 'subtract' | 'divide'): number | string {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'divide':
      if (b === 0) return 'Error: Division by zero';
      return a / b;
    default:
      return 'Error: Invalid operation';
  }
}