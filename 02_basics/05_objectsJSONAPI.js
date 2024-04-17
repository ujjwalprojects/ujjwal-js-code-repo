let course={
    courseName:'Javascript',
    price:'1000',
    courseDuration:'6 Month'
}

/**suppose we want to access the properties of an object multiple times
 * in a program
 * course.courseName, then there is an alternative way
 */


let {courseName} = course
// console.log(courseType);
// destructuring of a property of an object
let {courseName: courseType} = course
// console.log(courseType);

// how it is useful in react
const navbar = ({company}) => {
   
}
navbar(company = 'IBM')


// APIs
// JSON

// {
//     "name":"ujjwal",
//     "coursename":"Javascript",
// }






