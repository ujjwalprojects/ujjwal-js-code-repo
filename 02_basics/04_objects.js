//Objects part two

// singelton object 
// let chatGptUser = new Object()

// non singelton object
let whatsappUser = {}

whatsappUser.Id = 'AB122'
whatsappUser.name = 'Ujjwal'

// console.log(typeof chatGptUser)

// object inside object
let snapUser = {
    email:'snapuser@gmail.com',
    fullname:{
        firstName:'ujjwal',
        lastName:'singh'
    }
}
//this is usefull when we traverse the elements in a loop either by keys or values
// console.log(Object.keys(snapUser));
// console.log(Object.values(snapUser));
// console.log(Object.entries(snapUser));
// console.log(snapUser.hasOwnProperty('email'));


// console.log(snapUser.fullname.lastName)

/**if full name is not available then we can also use ? */
// console.log(snapUser.fullname?.lastName)



// combine objects

let obj1 = {
    1:'a',
    2:'b'
}
let obj2 = {
    3:'c'
}

// problem with this approach is that it gives object inside an object
let obj3 = {obj1, obj2}
// console.log(obj3)//o/p:= { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c' } }


// Another way

let obj4 = Object.assign(obj1, obj2)
// console.log(obj4) 
//o/p:= { '1': 'a', '2': 'b', '3': 'c' } 
/**Object.assign(obj1, obj2) modifies obj1 by adding properties from obj2 to it.
It returns the modified obj1, which now contains properties from both obj1 and obj2.
Since obj1 was modified directly, obj4 is essentially a reference to the same object as obj1. */


// Another way

let obj5 = Object.assign({}, obj1,obj2)
// console.log(obj5) 
//o/p:= { '1': 'a', '2': 'b', '3': 'c' }
/**
 * Object.assign({}, obj1, obj2) creates a new empty object {} and then copies properties from both obj1 and obj2 into it.
It does not modify either obj1 or obj2.
It returns a new object containing properties from both obj1 and obj2, but neither obj1 nor obj2 are modified.
Therefore, obj5 is a new object that contains the combined properties of obj1 and obj2, but it's distinct from both.
 */


// Another way and mostly used like array

let obj6 = {...obj1, ...obj2}
// console.log(obj6)








