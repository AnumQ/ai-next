let count = 0;

const counter = {
  increment() {
    return ++count;
  },

  decrement() {
    return --count;
  },

  getCount() {
    return count;
  },
};

Object.freeze(counter);

export { counter as Counter };
