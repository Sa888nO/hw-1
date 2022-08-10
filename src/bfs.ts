const bfs = (tree) => {
  if (typeof tree != 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
  let nodes: string[] = [];
  let answer: string[] = [];
  let ready = new Set();
  const parse = (array) => {
    for (let item of array) {
      if (tree[item].length != 0) {
        nodes.push(item);
      }
    }
    for (let item of array) {
      parse(tree[item]);
    }
  };

  nodes.push(Object.keys(tree)[0]);
  if (tree[Object.keys(tree)[0]].length != 0) {
    parse(tree[Object.keys(tree)[0]]);
  }

  for (let node of nodes) {
    if (!ready.has(node)) {
      ready.add(node);
      answer.push(node);
    }
    for (let item of tree[node]) {
      console.log('item ' + item);
      if (!ready.has(item)) {
        ready.add(item);
        answer.push(item);
      }
    }
  }
  return answer;
};
export default bfs;
