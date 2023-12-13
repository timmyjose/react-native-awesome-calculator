/* eslint-disable prettier/prettier */
const AwesomeCalculator = require('./NativeAwesomeCalculator').default;

export function add(a: number, b: number): number {
  return AwesomeCalculator.add(a, b);
}

export function sub(a: number, b: number): number {
  return AwesomeCalculator.sub(a, b)
}

export function mul(a: number, b: number): number {
  return AwesomeCalculator.mul(a, b)
}

export function div(a: number, b: number): number {
  return AwesomeCalculator.div(a, b)
}

