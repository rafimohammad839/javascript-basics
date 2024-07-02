// // JavaScript loops in arrays

// // 1. Basic for-loop
const arr = [2, 3, 4, 5, 1];

// for (let a = 0; a < arr.length; a++) {
//     console.log(arr[a], a);
// }

// 2. for-of loop

// for (const value of arr) {
//     console.log(value);
// }

// 3. for-each loop

// arr.forEach(function(value, index) {
//     console.log(value, index);
// })

// arr.forEach(function(value, index) {
//     console.log(value, index)
// })


// Question #1: Create an array of fruits and print them individually using for-of loop

// let fruits = ["apple", "banana", "pomgranent", "papaya", "grapes", "dates", "Munnalal"]
// for (const value of fruits){
//     console.log(value);
// }

// //            // 0  1   2   3   4
// // const arr = [10, 20, 30, 40, 50, 15, 70, 28, 80, 12]

// // function findMax(arr) {
    
// //     let max = arr[0];

// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] > max) {
// //             max = arr[i];
// //         }
// //     }

// //     return max;

// // }

// // console.log(findMax(arr));




// Question #2: Write a function to accept an array that finds the minimum value in the array and return it

// const tempArr = [1, 40, 20, 15, 10, 60, 70, 3];

// function findmin(tempArr) {
//     let min = tempArr[0];
//     for (let i = 1; i < tempArr.length; i++) {
//         if (tempArr[i] < min) {
//             min = tempArr[i];
//         }
//     }
//     return min;
// }
// console.log(findmin(tempArr));

// Question #3: Write a function to accept an array that checks if it has the number 30. If so, return true, else false

// const thirty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// function findthirty(thirty) {

//     let thirdindex = thirty[0];

//     for (let i = 1; i < thirty.length; i++) {

//         if (thirty[i] == 30) {

//             return true;
//         }
//     }
//     return false;
// }

// console.log(findthirty(thirty));


// let cn = 12;
// let i 
// while(i != cn) {
//     i = prompt ("Enter a Number");
// }


// const thirty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 40];

// function findthirty(thirty) {

//     let thirdindex = thirty[0];

//     for (let i = 1; i < thirty.length; i++) {

//         if (thirty[i] == 30) {

//             return true;
//         }
//     }
//     return false;
// }

// console.log(findthirty(thirty));




// const value = [20, 23, 32, 35, 64, 45, 78, 96,];

// function findvalue(value) {

//     for (let i = 1; i < value.length; i++) {
//         if (value[i] == 78) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(findvalue(value));


// Question #3: Write a function that accepts an array as an argument and returns true if every element in it is even, otherwise false.
//     Index    0   1   2   3   4   5
// const myArr = [10, 20, 28, 22, 32, 44, 54];

// function findevennumber(myArr){
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] %2 != 0) {
//             return false;
//         }
//     }
//     return true;
// }
//  console.log(findevennumber(myArr));
