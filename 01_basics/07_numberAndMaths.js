//number
// this automatically defines score as a number
const score = 400
// console.log(score)

// we can also dedicatedly define a number in JS by using new keyword
// which creates as an object and further we can access the property of that object
const balance = new Number(100)
// console.log(typeof balance)
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(typeof balance.toString())
// decimal
// console.log(balance.toFixed(2))

// precision
const secondNumber = 23.265656

// console.log(secondNumber.toPrecision(2)) // 23
// console.log(secondNumber.toPrecision(3)) // 23.3
// console.log(secondNumber.toPrecision(4)) // 23.27


const hundreds  = 1000000
// console.log(hundreds.toLocaleString())//1,000,000 US
// console.log(hundreds.toLocaleString('en-IN'))//10,00,000



/**Maths ******************/

console.log(Math)
//absolute value
console.log(Math.abs(5.2))
//round
console.log(Math.round(5.3)) //5
console.log(Math.ceil(5.3)) //6
console.log(Math.floor(5.3)) //5
console.log(Math.min(5.3,36.3)) //5.3

console.log(Math.random()) //random value between 0-1 in decimal like 0.1457936340713275

// if i want a random within a range i.e more that 1
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10 + 1))

const min = 10
const max = 20

// this formula will give a random number between 10-20
console.log(Math.floor(Math.random() * (max-min + 1))+min)






