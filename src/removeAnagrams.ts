const removeAnagrams = (arrayStrings) => {
  if (!Array.isArray(arrayStrings)) {
    throw new Error('INVALID_ARGUMENT');
  }
  for (let string of arrayStrings) {
    if (typeof string !== 'string') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  }
  let answer: string[] = [];
  let sortedArray: string[] = [];
  for (let string of arrayStrings) {
    sortedArray.push(string.split('').sort().join(''));
  }
  for (let string of sortedArray) {
    if (
      sortedArray.reduce(function (n, val) {
        if (val === string) {
          n++;
        }
        return n;
      }, 0) >= 2
    ) {
      sortedArray = sortedArray.filter((item) => item != string);
    }
  }
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < arrayStrings.length; j++) {
      let original = arrayStrings[j];
      if (sortedArray[i] == arrayStrings[j].split('').sort().join('')) {
        answer.push(original);
      }
    }
  }
  return answer;
};

export default removeAnagrams;
