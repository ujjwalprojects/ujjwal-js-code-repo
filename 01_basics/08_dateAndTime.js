// Dates
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(typeof myDate) //object

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2024,2,20,5,6)
let myCreatedDate = new Date("01-14-2024")

// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleDateString())


let myTimeStamp = Date.now()
// show time in milisecond
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// convert to second
// console.log(Math.floor(Date.now()/1000))



// to extract month or year
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1 );
// console.log(newDate.getFullYear());


// Customize locale String
newDate.toLocaleString('default', {
    weekday:"long"
})

console.log(newDate);
