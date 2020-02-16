const exportObj = {};
(function () {
  const sum = (a, b) => {
    return a + b;
  };
  const result1 = sum(2, 3)
  console.log(result1) //5
  exportObj.sum = sum;
})()
const result2 = exportObj.sum(5, 8)
console.log(result2) // 13