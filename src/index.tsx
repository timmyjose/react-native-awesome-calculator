/* eslint-disable prettier/prettier */
const AwesomeCalculator = require('./NativeAwesomeCalculator').default;

export function execute(cmd: string): string {
  return AwesomeCalculator.execute(cmd);
}