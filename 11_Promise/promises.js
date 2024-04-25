
/** syntax 1 *************************/
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // db calls, network call
    setTimeout(() => {
        // console.log('async task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(()=>{
    // console.log('promise consumed')
})


/**syntax 2 ***************************/ 
new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log('async task 2')
        resolve()
    }, 1000);
}).then(()=>{
    // console.log('async task 2 resolved')
})

/** syntax 3 with param***************/ 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Ujjwal@gmail.com"})
    }, 1000);
})
promiseThree.then(function(user){
    // console.log(user)
})

/** syntax 4 with reject**************/ 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:"ujjwal", password:"123"})
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    }, 1000);
})
// chaining
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
    })
.then((username)=>{
    console.log(username)
    })
.catch((err)=>{
    // console.log(err)
    })
.finally(()=>{
    // console.log("The promise is either resolved or rejected")
    })


/** syntax 5 using async await************/ 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong!')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)        
    }
}

consumePromiseFive()


/** syntax 6 fetch******************/ 

 async function getAllUsers(){
    try {
        // time takes to fetch data from the remote url
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // time takes to convert response to json
        const jsonData = await response.json()
        // console.log(jsonData)
    } catch (error) {
        console.log('ERROR: ',error)        
    }
 }
 getAllUsers()

/**above async await implemented using fetch */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})


