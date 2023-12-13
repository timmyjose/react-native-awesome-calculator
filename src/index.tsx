const AwesomeCalculator = require('./NativeAwesomeCalculator').default;

export function multiply(a: number, b: number): number {
  return AwesomeCalculator.multiply(a, b);
}
