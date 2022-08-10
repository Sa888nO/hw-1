const getNumberProps = (props) => {
  if (!(typeof props === 'object' && props !== null && !Array.isArray(props))) {
    throw new Error('INVALID_ARGUMENT');
  }
  let answer: string[] = [];
  for (let key in props) {
    if (typeof props[key] === 'number') {
      answer.push(key);
    } else if (typeof props[key] == 'object') {
      answer.push(...getNumberProps(props[key]));
    }
  }
  return answer.sort();
};

export default getNumberProps;
