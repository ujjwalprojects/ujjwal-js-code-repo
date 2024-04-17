let marvel_heros =['thor','ironman','spiderman']
let dc_heros = ['superman','flash','batman']


// marvel_heros.push(dc_heros)
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//merge array
let allHeros = [...marvel_heros,...dc_heros]
// console.log(allHeros)

// mearge all elements in nested array
let newArr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let newArr2 = newArr1.flat(Infinity)//infinity means how deep you want to go in the nested array, we can also define a number
// console.log(newArr2)


// Array.isArray() is a JavaScript function call that checks whether the argument provided is an array or not. 
// console.log(Array.isArray('ujjwal'))
//false

//converted to array
// console.log(Array.from('ujjwal'))

// console.log(Array.from({name:'ujjwal'}))
// empty array:= array dosen't know should it make keys array or value array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
