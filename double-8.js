const arr = [2, 3, -4, 4, 5, -20, 0];
const res = arr
              .filter(item => item > 0)
              .map(item => item * 2);
console.log(res);