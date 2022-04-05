const calculator = {
  add: function(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') return 'error';
    return x + y;
  },
  subtract: function(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') return 'error';
    return x - y;
  },
  multiply: function(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') return 'error';
    return x * y;
  },
  divide: function(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') return 'error';
    if (y === 0) return 'undefined';
    return x / y;
  }
}

export default calculator;