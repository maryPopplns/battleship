const ITERATOR = (min, max, target_array) => {
  for (let i = min; i < max + 1; i++) {
    target_array.push(i);
  }
};

export default ITERATOR;
