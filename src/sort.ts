const sort = (string: string) => {
  if (!(typeof string === 'string')) {
    throw new Error('INVALID_ARGUMENT');
  }
  let answer: string[] = [];
  let splitString = string.toLowerCase().split(' ');
  splitString.sort((a, b) => (a.length >= b.length ? 1 : -1));
  for (let item of splitString) {
    let arrayItem = Array.from(item);
    item = arrayItem.sort().join('');
    answer.push(item);
  }
  return answer.join(' ');
};

export default sort;
