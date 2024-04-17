// Array

const myArr = ['A','B','C','D','E','F']
// console.log(myArr[5])


const carModels =['Maruti','Hundai']

const myArr2 = new Array(1,3,5,6,7)
// console.log(myArr2[2])
// console.log(myArr2.length)

//Array methods

//add values to array
myArr.push('singh')
// console.log(myArr)

//remove last element from array
myArr.pop()
// console.log(myArr)

//put new element to start of the array
myArr.unshift(8)
// console.log(myArr)

//pop first element an array
myArr.shift()
// console.log(myArr)


// check if an array contains any value passed as a parameter
// console.log(myArr.includes('ujj'))

// check index of some value in array
// console.log(myArr.indexOf('ujjwal'))

// In JavaScript, array.join() is a method that joins all elements of an array into a single string.
// const newArr3 = myArr.join()

// console.log(newArr3)
// console.log(typeof newArr3) //string



// slice, splice

/**
 * The term slice literally means to cut something into pieces. 
 * It is used to cut out elements from an array. 
 * It does not affect the original array.
 */
/**array.slice(start, end)
 * start denotes the index at which the array starts slicing.
    end denotes the index at which the array stops slicing.
 */


// console.log('A', myArr)
const myArrays = ['A','B','C','D','E','F']
const myA1 = myArrays.slice(1,2)
// console.log('Slice ', myA1)

/**
 * Splice, according to the dictionary, 
 * means to join things together. 
 * It is used to remove elements from an array or replace them.
 */
/**
 * array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN;
 * start denotes the index from which the method will start its operation on the array.
 * deleteCount denotes the number of values to be deleted from the start. If the value is 0, nothing will be deleted.
 * newElem1 to newElemN denote the values that would be added after the start.
 */

let fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 1 element at index 2 and show the remaining elements
// fruits.splice(2, 1); 
// Result: ['apple', 'banana', 'date']

// Remove 2 elements starting from index 1 and insert 'orange', 'lemon'
// fruits.splice(1, 2, 'orange', 'lemon'); 
// Result: ['apple', 'orange', 'lemon', 'date']


// Remove 0 elements starting from index 2 and insert 'grape'
// fruits.splice(2, 0, 'grape'); 
// Result: ['apple', 'banana', 'grape', 'cherry', 'date' ]


// console.log(fruits);

