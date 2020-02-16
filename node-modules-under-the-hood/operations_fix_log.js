console.log('Arguments given by node', arguments)

const sum = (a, b) => {
  return a + b;
};
const multiply = (a, b) => {
  return a * b
};

module.exports = {
  sum,
  multiply
}
