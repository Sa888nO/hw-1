const planEvent = (cb, delay) => {
  if (typeof cb !== 'function' || typeof delay !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  let result = setTimeout(cb, delay);
  return new Promise((resolve, reject) => result);
};

export default planEvent;
