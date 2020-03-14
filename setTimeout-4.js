// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i*1000);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i*1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout((function(i) {
//     return function() {
//       console.log(i);
//     }
//   })(i), i*1000);
// }

// for (var i = 0; i < 10; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, i*1000);
//   })(i);
// }

for (var i = 0; i < 10; i++) {
  setTimeout((function(i) {
    console.log(i);
  }).bind(null, i), i*1000);
}