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
// console.log(loginUserMsg(''));


function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(200));

// pass multiple params using rest operator (...)
function calculateFoodPrice(...num1){
    return num1
}

// console.log(calculateFoodPrice(200,201,202));
// returns an array [ 200, 201, 202 ]


function calculateItemsPrice(val1, val2,...val3){
    return val3
}
// console.log(calculateItemsPrice(500,501,600,601))
// [ 600, 601 ]


const flipKart = {
        itemname:'bag',
        itemprice: 500
}
function handleObject(anyObject){
    console.log(`Item Name is ${anyObject.itemname} and price is ${anyObject.itemprice}`)
}
// handleObject(flipKart);

// pass object directly
handleObject({
    itemname:'toy',
    itemprice:200
})


const newCartArray = [200,300,400,500]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(newCartArray));
