const pow = (a: number, b = undefined) => {
  function chekNumber(potential_number1, potential_number2 = undefined) {
    if (potential_number2 == undefined) {
      if (!(typeof potential_number1 == 'number')) {
        throw new Error('INVALID_ARGUMENT');
      }
    } else {
      if (!(typeof a == 'number') || !(typeof b == 'number')) {
        throw new Error('INVALID_ARGUMENT');
      }
    }
  }

  if (b == undefined) {
    chekNumber(a);
    return function (c) {
      chekNumber(c);
      if (c == 0) {
        return 1;
      }
      if (a == 0 && c == -1) {
        return Infinity;
      }
      return a ** c;
    };
  }
  chekNumber(a, b);
  if (b == 0) {
    return 1;
  }
  if (a == 0 && b == -1) {
    return Infinity;
  }
  return a ** b;
};

export default pow;
