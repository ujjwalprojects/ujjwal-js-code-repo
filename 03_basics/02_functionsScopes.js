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
    // console.log(`Inner value of a ${a}`)
    // console.log(`Inner value of b ${b}`)
    // console.log(`Inner value of c ${c}`)
}
a = 301
// c = 501
// b = 401 const not allowed to change

// console.log(`Outer value of a ${a}`)
// console.log(`Outer value of b ${b}`)
// console.log(`Outer value of c ${c}`)


//nested scope

function one(){
    const username = "ujjwal"
    function two(){
        const email = 'ujjwal@gmail.com'
        // console.log(username)
    }
    // console.log(email)
    two()
}
one()


if(true){
    const username = 'ujjwal'
    if(username === 'ujjwal'){
        const website = 'youtube'
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)



/***************interesting example */
/**Hoisting Concept */
/**in this example we can call the function before its declaration */
console.log(addOne(5))

function addOne(num){
    return num+1;
}


/**but in this kind of formation we cannot call the function before its declaration */
// this type of formation is call function with expression
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5))


