import analyzeArray from "./analyzeArray";

test('[1,2,3] works', () => {
  expect(analyzeArray([1,2,3])).toMatchObject({
    average: 2,
    min: 1,
    max: 3,
    length: 3
  })
}) 

test('array with non numbers', () => {
  expect(analyzeArray([1,2,'c'])).toBe('error');
})