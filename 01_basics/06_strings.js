// In JS string can be inside ""/''


const name = "ujjwal"
const repoCount = 50

console.log(name+repoCount); //not recommended to concat this way in modern day programming

// this is the better way to concat variables
console.log(`Hello ${name} and my repo count is ${repoCount}`);


const gameName = new String('ujjwal-pc') 
console.log(typeof gameName); //object
//accessing object property
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newGameName = gameName.substring(0,4);
console.log(newGameName);


const anotherGameName = gameName.slice(-9,3);
console.log(anotherGameName)

const newPlayerOne = '    ujjwal'
console.log(newPlayerOne.trim())

// replace
const url = 'https://ujjwal.com/ujjwal%20singh'
console.log(url.replace('%20','-'))
console.log(url.includes('ujjwal'))

// string to array

const userName = 'ujjwal-singh-20'
console.log(userName.split('-'))

