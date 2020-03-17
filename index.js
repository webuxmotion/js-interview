console.log('https://youtu.be/pahO5XjnfLA')

// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(42)
// calc()


// function createIncrementor(n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
// console.log(addOne(2), addTen(2))


// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// console.log(comUrl('google'))


function logPerson(some) {
  console.log(some)
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Andrii', age: 29, job: 'Frontend' }
const person2 = { name: 'Alexandra', age: 24, job: 'Hair Stylist' }

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args)
  }
}

bind(person1, logPerson)('test')
bind(person2, logPerson)('test2')