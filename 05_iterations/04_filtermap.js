const lang = ['js','ruby','java','python','c']


// foreach dosen't return any value
const values = lang.forEach((item)=>{
    // console.log(item);
    return item
})
// console.log(values);//undefined



const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter returns a value, but we have to provide condition
const newNums = myNums.filter((num)=> num > 4)

// if we add parenthesis then we have to add a return keyword
const newNums2 = myNums.filter((num)=> { return num > 4})

// passing multiple conditions
const newNums4 = myNums.filter((num)=> { 
    return num > 4 && num < 9
})

// console.log(newNums4)


const newNums3=[]
// using foreach
myNums.forEach((num)=>{
    if(num>4){
        newNums3.push(num)
    }
})

// console.log(newNums3)


// filter map 
const myNumbers = [1,2,3,4,5]

const newNumber1 = myNumbers.map((num)=> num + 10)

// chaining
const newNumber2 = myNumbers
                        .map((num)=> num*10)
                        .map((num) => num + 1)
                        .filter((num)=>num>=40)

// console.log(newNumber2)


// reduce

/**
 * reduce() method is used to apply a function to each
 * element in an array and reduce the array to a single value. 
 * It iterates through the array, calling the provided function 
 * on each element, and accumulates the result into a single value. 
 * The syntax for reduce() is: array.reduce(callbackFunction, initialValue)
 * used in shopping cart to add different value of items
 */




const myVal1 = [1,2,3]

const myval2 = myVal1.reduce(function(acc,curval){
    // console.log(`acc: ${acc} and curval: ${curval}`)
    return acc + curval

},0)

const myval3 = myVal1.reduce((acc, curval)=> acc+curval, 0)

// console.log(myval3)



const shoppingCart =[
    {
        itemName:'js course',
        itemPrice:3000
    },
    {
        itemName: 'python course',
        itemPrice:5000
    },
    {
        itemName: 'react course',
        itemPrice:10000
    },
    {
        itemName: 'web3 course',
        itemPrice:100000
    }
]

const finalPrice = shoppingCart.reduce((acc, item)=> acc+item.itemPrice ,0)

console.log(finalPrice)




