// function

function myCourse(){
    console.log('myCourseOne')
}

// myCourse();


// function addNumbers(num1, num2){
//     console.log(num1+num2);
// }
// addNumbers(2,7);
function addNumbers(num1, num2){
    // let result = num1+num2;
    // return result;

    return num1+num2;
}

let result = addNumbers(5,9);
// console.log(result)


function loginUserMsg(userName){
    if(userName)
    return `${userName} just logged in`;
    else
    return `Please enter a user name..!!`;
}

// console.log(loginUserMsg('ujjwal'));
console.log(loginUserMsg(''));


