import caesarCipher from "./ceasarCipher";

test('shift abc to bcd', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
})

test('shift ABC to BCD', () => {
  expect(caesarCipher('ABC', 1)).toBe('BCD');
})

test('shift by more than 26', () => {
  expect(caesarCipher('ABC', 27)).toBe('BCD');
})

test('ignores punctuation', () => {
  expect(caesarCipher('A B,C', 1)).toBe('B C,D');
})

test('ignores non string', () => {
  expect(caesarCipher(45, 1)).toBe('error');
})