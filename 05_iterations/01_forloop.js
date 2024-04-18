// for

for(let index = 0; index < 10; index++){
    const element = index;
    // console.log(element);
}

// break and continue

for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log('5 detected');
        break
    }    
    console.log(`value of index is ${index}`);
}


for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log('5 detected');
        /**continue statement in a for loop when 
         * you want to skip the rest of the current 
         * iteration and proceed to the next iteration 
         * of the loop immediately. This can be useful 
         * when you encounter certain conditions within 
         * the loop that should cause the current iteration 
         * to be skipped. */
        continue
    }    
    console.log(`value of index is ${index}`);
}

