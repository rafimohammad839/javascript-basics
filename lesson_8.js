// Spread Operator

// 1. To copy arrays

// const arr = [1, 2, 3];
// const copy = [...arr];
// console.log(copy === arr);

// 2. Merge arrays

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const merged = [...arr1, ...arr2];

// console.log(merged);

// 3. Adding elements to an array

// const arr = [1, 2, 3];
// const newArr = [...arr, 4];

// console.log(newArr === arr);

// 4. Converting strings to arrays

// const str1 = 'He-Man'; 
// const strArr = [...str1];

// console.log(strArr);

// 5. Function arguments

// function sum(first, second, third) {
//     return first * second * third; 
// }

// const numbers = [2, 2, 3];
// const result = sum(...numbers); // sum(1, 2, 3)

// console.log(result);

// Question #1: Create a function that accepts an array and two values. Add first value in the beginning of the array and second value at the end of the array.

// Input: [2, 3, 4], a = 1, b = 5
// Output: [1, 2, 3, 5]

// function addElements(arr, a, b) {
//     const newNumber = [a, ...arr, b]
//     return newNumber;
// }

// console.log(addElements([2, 3, 4], 1, 5));

// Question #2: Write a function to accept two arrays and merge them and return them.

function mergeArrays(arr1, arr2) {
    const marge = [...arr1, ...arr2];
    return marge;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2));