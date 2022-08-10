const multiply = (value) => {
  if (typeof value != 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  return function (value2) {
    if (typeof value2 != 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    return value * value2;
  };
};

export default multiply;
