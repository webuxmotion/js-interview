// [2,2,2,2].map(parseInt)

console.log([2,2,2,2].map((el, index) => {
  return parseInt(el, index);
}));