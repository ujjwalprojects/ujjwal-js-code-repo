// understanding this

const user = {
    username:'ujjwal',
    price:999,
    welcomemessage: function(){
        // when we are refering to the current context we use this keyword
        // we can access variable inside user scope using this
        // console.log(`${this.username} , welcome to website`)
        // console.log(this)
        // o/p:= 
        /**
         * {
                username: 'ujjwal',
                price: 999,
                welcomemessage: [Function: welcomemessage]
                }
                {
                username: 'singh',
                price: 999,
                welcomemessage: [Function: welcomemessage]
                }
         */
    }
}

user.welcomemessage()
// o/p:= ujjwal , welcome to website
user.username = 'singh'
user.welcomemessage()
// o/p:= singh , welcome to website


// console.log(this)



function one(){
    let username  = 'onefun'
    // console.log(this.username) //o/p:= undefined
}
one()


/**arrow function */

const two = () =>{
    let username = 'twofun'
    console.log(this)
}
two()

// explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,6));

// implicit return, useful in react

const addThree = (num1, num2, num3) => (num1+num2+num3)

// return object

const addFour = () => ({username:'ujjwal'})

console.log(addFour());