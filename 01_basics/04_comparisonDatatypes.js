// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


console.log("2" > 1); //true, because JS has converted this to number internally
console.log("02" > 1); //true

/*So when there is a comparison operation make sure we compare
value of same datatype*/

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

console.log(undefined>0) //false
console.log(undefined==0) //false
console.log(undefined>=0) //false


/**Strict Check  ===*/
console.log("2" === 2) // false, because it checks the datatype as well
