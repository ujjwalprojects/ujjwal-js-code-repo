let score = "33"

console.log(typeof score);
console.log(typeof (score));

// conversion of string to number
let valueInNumber = Number(score);

console.log(valueInNumber) //o/p := 33
console.log(typeof valueInNumber) //o/p := number

/************************/

let age = "22aaa";

let ageInNumber = Number(age);

console.log(ageInNumber)  // o/p := NAN
console.log(typeof ageInNumber) // o/p := number

/***********************/
let marks = null;

let marksInNumber = Number(marks);

console.log(marksInNumber)  // o/p := 0
console.log(typeof marksInNumber) // o/p := number
/***********************/

let point = undefined;

let pointInNumber = Number(point);

console.log(pointInNumber)  // o/p := NAN
console.log(typeof pointInNumber) // o/p := number

/***********************/
let qualified = true;

let qualifiedInNumber = Number(qualified);

console.log(qualifiedInNumber)  // o/p := 1
console.log(typeof qualifiedInNumber) // o/p := number


/***********************/
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn)  // o/p := true (if the input is greater than 1 then it fetches "true" as a result and only in case of 0 it fetches "false")
console.log(typeof booleanIsLoggedIn) // o/p := boolean



/***********************/
let userEmail = 3333;

let stringInNumber = String(userEmail);

console.log(stringInNumber)  // o/p := 3333
console.log(typeof stringInNumber) // o/p := string



/********Operations****************/


let value = 3
let negValue = -value
console.log(negValue)


console.log(2+2)
console.log(2-2)
console.log(2**3) //power
console.log(2/3) //remainder
console.log(2%3) //mod

let str1 = "Hello"
let str2 = " Ujjwal"

let str3 = str1 + str2
console.log(str3)

console.log("1"+2) //:= "12"
console.log("1"+2 +2) //:= "122"
console.log(1+2 +"2") //:= "32" 
console.log((1+2) +"2") //:= "32" 
console.log(1+"2" +2) //:= "122"







