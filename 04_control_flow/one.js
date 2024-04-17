// if statement


const isUserLoggedIn = true
if(isUserLoggedIn){
// do something
}

// implicit scope : single line and ending with semicolon
if(500>400) console.log('yes greater');

/**switch case */


const month = 3

switch(month){
    case 1: console.log('Jan');
        break;
    case 2: console.log('Feb');
        break;
    case 3: console.log('Mar');
        break;
    default:
        break;
}


/**Truthy and Falsy value */

const userEmail = ""

if(userEmail){
    console.log('Got user email');
}
else{
    console.log('No user email')
}

// o/p:= No user email

const userEmail2 = []

if(userEmail2){
    console.log('Got user email');
}
else{
    console.log('No user email')
}

// o/p:= Got user email


/**Note
 * falsy value: false, 0 ,-0, BigInt 0n, "", null, undefined, NaN
 * truthy value: "0", 'false', [], "  ", {}, function(){},  
 */

// check empty array
if(userEmail2.length===0){
    console.log('empty array')
}
// check empty object
const Obj = {}

if(Object.keys(Obj).length===0){
    console.log('empty array')
}

//Nullish coalescing operator (??): null undefined

let val1, val2, val3, val4;
val1 = 5??10
val2 = null??10
val3 = undefined??10
val4 = undefined??10??20

console.log(val1)//5
console.log(val2)//10
console.log(val3)//10
console.log(val4)//10


// Terniary operator
// condition ? true:false

const Price = 100

Price <= 80 ? console.log('less than 80'): console.log('greater than 80');

