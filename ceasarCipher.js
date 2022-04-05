const caesarCipher = function(str, shift) {
  const getNewChar = function(char) {
    const code = char.charCodeAt();
    if (code >= 65 && code <= 90) {
      // UPPER CASE
      return doShift(code, shift, 90);
    } else if (code >= 97 && code <= 122) {
      // lower case
      return doShift(code, shift, 122);
    } else {
      //symbol
      return String.fromCharCode(code);
    }
  }
  //guards
  if (typeof str !== 'string') return 'error';
  if (shift > 26) {
    shift = shift % 26;
  }
  //do
  let strArray = str.split("");
  let newArray = strArray.map(getNewChar);
  return newArray.join("");
}

const doShift = function(code, shift, limit) {
  if (code + shift > limit) {
    return String.fromCharCode(code + shift - 26);
  } else {
    return String.fromCharCode(code + shift);
  }
}

export default caesarCipher;