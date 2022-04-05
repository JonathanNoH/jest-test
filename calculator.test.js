import calculator from "./calculator";

test('add 1 and 2 to 3', () => {
  expect(calculator.add(1,2)).toBe(3);
})

test('non number input to be error', () => {
  expect(calculator.add('1', 2)).toBe('error');
})

test('subtract 1 and 2 to -1', () => {
  expect(calculator.subtract(1,2)).toBe(-1);
})

test('multiply 1 and 2 to 2', () => {
  expect(calculator.multiply(1,2)).toBe(2);
})

test('divide 1 and 2 to 0.5', () => {
  expect(calculator.divide(1,2)).toBeCloseTo(0.5);
})

test('divide 1 by 0 to undefined', () => {
  expect(calculator.divide(1,0)).toBe('undefined');
})