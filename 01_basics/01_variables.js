//const cannot be changed
const accountId = 14214

/*Using var datatype creates a problem when there 
 is a same variable name declared multiple times in the same program, 
 due to which any changes in one variable will replicate the new value in all the other variables.
 **prefer not to use var because of the issue in block scope and functional scope*/
var accountPassword = "12345"

/*scoped variable :- Therefore to encouter the problem faced by "var"
let is being used, so if we declare a let inside a scope, 
it will only change the value inside that scope and will not affect the other variable with the same name.*/
let accountEmail = "ujjwal@gmail.com"

/* In js it is also possible to declare a variable without mentioning 
any datatype, but it is not best practice to use it this way*/
accountCity = "Sikkim"

// undefined variable
let accountState;


accountEmail = "singh@gmail.com"
accountPassword = "654654654"
accountCity = "Darjeeling"


console.table([accountEmail,accountPassword,accountCity,accountState]);