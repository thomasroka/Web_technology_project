
//Code of Var
var number1 = 10;
console.log(number1);

/* 
Output:
10

Explanation:
The var keyword is used to declare a variable. It has a function scope, which means it is accessible throughout the function in which it is declared. In this case, the variable number1 is declared in the global scope and is accessible throughout the program.
 */

//code of Let 
let number2 = 20;
console.log(number2);

/*
Output:
20
Explanation:

The let keyword is used to declare a variable. It has a block scope, which means it is only accessible within the block in which it is declared. In this case, the variable number2 is declared in the global scope and is accessible throughout the program.
 */

//code of Const
const age = 20;
console.log(age)

/*
Output:
20

Explanation:
The const keyword is used to declare a variable. It has a block scope, which means it is only accessible within the block in which it is declared. In this case, the variable age is declared in the global scope and is accessible throughout the program.
*/


//  Differences between let const and Var
/*
Scope- let and const are block scoped, while var is function scoped.
Re-declaration- let and const cannot be re-declared, while var can be re-declared.
Hoisting- let and const are not hoisted, while var is hoisted.
*/