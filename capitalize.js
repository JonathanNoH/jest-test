const capitalize = function(str) {
  if (typeof str !== 'string') return 'error';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalize;