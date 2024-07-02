// Rest Operator

console.log('Learning REST Operator');

// 1. (i) Using rest parameters in function

// function addNumbers(...args) { // args = [1, 2, 3, 4]
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum = sum + args[i];
//     }
//     return sum;
// }

// console.log(addNumbers(1, 2, 3, 4));


// 2. (ii) Using rest parameters as remaining arguments

function multipy(a, b, c, ...rest) {
    console.log(a, b, c);
    console.log(rest);
}

multipy(1, 'rafi', 3, 4, 5, 6, 7.6, ',', 8)

// 3. Using rest parameters in array destructuring

const [a, b, ...rest] = ['John', 'Doe', 'Josh', 'Robert', "McKinley"];

console.log(a, b);
console.log(rest);

// Question #1: Write a function to accept rest arguments and return the product of all elements in the array

// Input: [1, 2, 3, 4, 5], Output: 120

function mutli(...args){
    let multiplpy = 1;
    for (let i = 0; i < args.length; i++) {
        multiplpy = multiplpy * args[i];
    }
    return multiplpy;
}

console.log(mutli(1, 2, 3, 4, 5));
