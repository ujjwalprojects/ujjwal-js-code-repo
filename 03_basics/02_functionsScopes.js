let a = 10 
const b = 20
var c = 30 //not recommended

// console.log(a)
// console.log(b)
// console.log(c)

if(true){
    let a = 300
    const b = 400
    var c = 500
    console.log(`Inner value of a ${a}`)
    console.log(`Inner value of b ${b}`)
    console.log(`Inner value of c ${c}`)
}
a = 301
// c = 501
// b = 401 const not allowed to change

console.log(`Outer value of a ${a}`)
console.log(`Outer value of b ${b}`)
console.log(`Outer value of c ${c}`)


