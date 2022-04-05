const analyzeArray = function(arr) {
  if (arr.filter(element => typeof element !== 'number').length > 0){
    return 'error';
  }
  const average = (arr.reduce(
    (prev, current) => prev + current,
  0)) / arr.length;
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  const length = arr.length;
  return {
    average,
    min,
    max,
    length
  }
}

export default analyzeArray;