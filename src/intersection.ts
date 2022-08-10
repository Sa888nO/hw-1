const intersection = (array1: number[], array2: number[]) => {
  if (array1 === undefined || array2 === undefined) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  if (!(Array.isArray(array1) && Array.isArray(array2))) {
    throw new Error('INVALID_ARGUMENT');
  }
  if (
    !(array1.filter((item) => !(typeof item == 'number')).length === 0 &&
      array2.filter((item) => !(typeof item == 'number')).length === 0)!
  ) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }
  if (array1.length == 0 || array2.length == 0) {
    return [];
  }
  let answer: number[] = [];
  let setArray = new Set(array1);
  for (let item of array2) {
    if (setArray.has(item)) {
      answer.push(item);
      setArray.delete(item);
    }
  }
  return answer;
};

export default intersection;
