// Primitive

/**7 types:
 *      String
 *      Number
 *      Boolean
 *      null
 *      undefined
 *      Symbol     
 *      BigInt
 */

const score = 100 //number
const scoreValue = 100.3 //number
const isLoggedIn = false // boolean
const outSideTemp = null // null
let userEmail; //undefined

const id = Symbol('123')
// console.log(id);

// Reference type/Non-Primitive

/**Array
 * Objects
 * Functions
 */

const brands = ["Toyota","Maruti"]

let myObj ={
    name:"Ujjwal",
    gender:"Male",
}

const myFunction = function(){
    console.log("Hello World")
}



/**memory stack and heap */

// primitive will be stored in stack and 
// non primitive wil be stored in heap

 let myName = "Ujjwal"
 let mySecondName = myName;
 mySecondName = "Singh"

 console.log(myName)
 console.log(mySecondName)
 

 let userOne = {
    email:"user@gmail.com",
    isEmployeed:true
 }

 let userTwo = userOne

 userTwo.email="user@yahoo.com";

 console.log(userOne.email)
 console.log(userTwo.email)




