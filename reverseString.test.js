import reverseString from "./reverseString";

test('returns mij from jim', () => {
  expect(reverseString('jim')).toBe('mij');
})

test('returns obmij from jim', () => {
  expect(reverseString('jimbo')).toBe('obmij');
})

test('returns error when not handed string', () => {
  expect(reverseString(123)).toBe('error');
})