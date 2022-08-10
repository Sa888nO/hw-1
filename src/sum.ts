const sum = (...args: number[]) => {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  for (let item of args) {
    if (!(typeof item == 'number')) {
      throw new Error('INVALID_ARGUMENT');
    }
  }
  return args.reduce((a: number, b: number) => a + b);
};

export default sum;
