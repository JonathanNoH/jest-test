const reverseString = function(str) {
  if (typeof str !== 'string') return 'error';
  return str.split('').reverse().join('');
  
}

export default reverseString;