import capitalize from './capitalize';

test('capitalizes jim', () => {
  expect(capitalize('jim')).toBe('Jim');
})

test('capitalizes jimbo', () => {
  expect(capitalize('jimbo')).toBe('Jimbo');
})

test('returns error when not handed string', () => {
  expect(capitalize(123)).toBe('error');
})