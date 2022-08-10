const dfs = (tree) => {
  if (typeof tree != 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
  let answer: string[] = [];
  const parse = (array) => {
    for (let item of array) {
      answer.push(item);
      if (tree[item].length != 0) {
        parse(tree[item]);
      }
    }
  };
  answer.push(Object.keys(tree)[0]);
  if (tree[Object.keys(tree)[0]].length != 0) {
    parse(tree[Object.keys(tree)[0]]);
  }
  return answer;
};

export default dfs;
