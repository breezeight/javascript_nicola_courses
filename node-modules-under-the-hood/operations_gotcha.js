const sum = (a, b) => {
  return a + b;
};
const multiply = (a, b) => {
  return a * b
};

// We change the reference, require will return this new object
module.exports = {
  multiply
}

// We add the sum property to the old object
exports.sum = sum 
