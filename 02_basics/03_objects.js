// Objects

// singelton 
// Object.create := constructor method

// object literals
// const jsUser = {} object declaration

// object construct contains keys and values

// symbol
let mysym = Symbol('Key1')

const jsUser = {
    name:'Ujjwal',
    age:33,
    location:'Gangtok',
    email:'ujjwal@gmail.com',
    isLoggedIn:false,
    lastLoginDays:['Monday','Saturday'],
    [mysym]:'myKey1'
}

// ways to access object properties
// one way
// console.log(jsUser.email)
// second way
// console.log(jsUser['email'])
// console.log(jsUser[mysym])


// change value of object
jsUser.email ='ujjwal@chatgpt.com'

// freeze value of object
// Object.freeze(jsUser)
// jsUser.email ='ujjwal@ms.com'

// console.log(jsUser['email'])


// function

jsUser.greeting= function(){
    console.log(`Hello user`);
}
jsUser.greetingTwo= function(){
    console.log(`Hello user, ${this.name}`);
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
