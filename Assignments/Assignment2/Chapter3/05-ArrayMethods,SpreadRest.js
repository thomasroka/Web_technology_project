
// 1. Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log("Original numbers:", numbers);
console.log("Doubled numbers (map):", doubled);
/*
Output:
Original numbers: [ 1, 2, 3, 4, 5 ]
Doubled numbers (map): [ 2, 4, 6, 8, 10 ]

Explanation:
map() does not change the original array. It returns a new array where each element has been transformed by the arrow function.
*/


// 2. Array.prototype.filter()
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even numbers (filter):", evenNumbers);
/*
Output:
Even numbers (filter): [ 2, 4 ]

Explanation:
filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which the callback returns a truthy value.
*/


// 3. Array.prototype.reduce()
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of numbers (reduce):", sum);
/*
Output:
Sum of numbers (reduce): 15

Explanation:
The accumulator starts at 0 (the initial value passed as the second argument to reduce).
For each element, it adds the currentValue to the accumulator. The final returned value is 15.
*/


// 4. Spread Operator (...)
// The spread operator allows an iterable (like an array or object) to be expanded in places where zero or more arguments or elements are expected.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Combining arrays
const copiedArray = [...arr1];       // Cloning/Copying an array

console.log("Combined array (spread):", combined);
console.log("Copied array (spread):", copiedArray);
/*
Output:
Combined array (spread): [ 1, 2, 3, 4, 5, 6 ]
Copied array (spread): [ 1, 2, 3 ]

Explanation:
The spread operator unpacks the elements of arr1 and arr2 into a new array. Modifying copiedArray will not affect arr1 because it is a shallow copy.
*/


// 5. Rest Operator (...)
// The rest operator has the same syntax as the spread operator (...), but it is used to destructure or gather multiple elements into a single array/object. It is often used in function parameters.
function sumAll(...args) {
    // args is an array containing all passed arguments
    return args.reduce((acc, curr) => acc + curr, 0);
}

const [first, second, ...restOfThem] = [10, 20, 30, 40, 50];

console.log("Summing arguments (rest):", sumAll(1, 2, 3, 4));
console.log("Destructuring with rest:", first, second, restOfThem);
/*
Output:
Summing arguments (rest): 10
Destructuring with rest: 10 20 [ 30, 40, 50 ]

Explanation:
In the sumAll function parameter list, ...args gathers all individual arguments into a single array called args.
In the destructuring assignment, ...restOfThem gathers all remaining array elements that weren't assigned to first or second.
*/
