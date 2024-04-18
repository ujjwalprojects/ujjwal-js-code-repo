// for of loops

['','','']
[{},{},{}]


/**
 * for...of when iterating over iterable values like arrays
 * Used to iterate over iterable objects like arrays, strings, maps, sets, etc.
 * It provides a concise syntax for iterating over the values of an iterable.
 * It does not provide access to the index of the elements directly.
 */
const array = [1, 2, 3];
for (const element of array) {
    // console.log(element);
}

/**
 * for...in when iterating over object properties
 * Used to iterate over the enumerable properties of an object, including properties inherited from its prototype chain.
 * It provides access to the keys (property names) of an object.
 * It's generally used for iterating over object properties, not for iterating over arrays or other iterables.
 */
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    // console.log(key + ': ' + obj[key]);
}

/**Maps 
 * 
 * Key-Value Pairs: A Map stores collections of key-value pairs. 
 * Each key in a Map is unique; no two elements can have the same key.
*/

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United Status of America')
map.set('Fr','France')

// console.log(map);

for(const [key,value] of map){
    // console.log(key, ':-', value)
}


// map with foreach
let myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'One');
myMap.set(true, 'Yes');

// console.log(myMap.get('name')); // Output: John
// console.log(myMap.get(1));      // Output: One
// console.log(myMap.get(true));   // Output: Yes

// console.log(myMap.size);        // Output: 3

myMap.forEach((value, key) => {
    // console.log(`${key}: ${value}`);
});



const lang = ['js','ruby','java','python','c']

lang.forEach(function(val){
    // console.log(val);
})

// arrow function
lang.forEach((item)=>{
    // console.log(item);
})


// creating seperate function and calling it in foreach
function printMe(item){
    // console.log(item);
}
lang.forEach(printMe);


lang.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})



// obj inside array

const mycoding = [
    {
        langName:'javascript',
        langId:'01'
    },
    {
        langName:'python',
        langId:'02'
    },
    {
        langName:'c++',
        langId:'03'
    }
]

mycoding.forEach((item)=>{
    console.log(`lang ID: ${item.langId} and Lang Name: ${item.langName}`)
})


