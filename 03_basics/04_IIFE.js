//  Immediately Invoked Function Expression(IFFE)

/* Variables declared inside the IIFE are not 
accessible from the outside thus preventing them 
from polluting the global namespace and avoiding potential naming conflicts.
*/ 

/**
 *  It can be used to isolate a piece of code from the 
 *  rest of the application, especially when working 
 *  in environments where variables can easily be overwritten or modified unintentionally.
 */

(function funIFFE(){
    var x = 10;
    console.log('DB Connected');
})();

// x is not accessible from the outside
console.log(typeof x); // Output: undefined

/**so IFFE know that it is invoked but it dosen't know 
 * whre should it end the context therefore a semicolan ; is 
 * required to tne the iffe function
 */

// arrow function way
(()=>{console.log('DB 2 Connected')})();
// paramaterized 
((name)=>{console.log(`${name} DB 2 Connected`)})('Portal');