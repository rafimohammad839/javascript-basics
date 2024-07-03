// Switch statement
// Switch statement is similar to if-else ladder. It saves us a lot of if-else code.

// let a = 40;

// switch (a) {
//   case 10:
//     console.log('Good Morning!');
//     break;
//   case 20:
//     console.log('Good afternoon!');
//     break;
//   case 30:
//     console.log('Good evening!');
//     break;
//   case 5:
//     console.log('Bonnuit'); // Good night!
//     break;
//   case 40:
//     console.log('Adios, amigos!'); // Goodbye, friends!
//     break;
//   case 50:
//     console.log('Buenos Dias, amigo!'); // Good morning, friend!
//     break;
//   default:
//     console.log('None of the above conditions matches!');
// }

// Control will come here, out of the switch statement if you add a break statement.

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day!");
// }

// Question #1: Create a function namely getSeason which will accept a month and print to console the season the month falls in. Use switch statement to do this.
// Timer: 25 minutes
/* 
  12 -> December : Winter
  1 -> January : Winter
  2 -> February : Winter
  3 -> March : Spring
  4 -> April : Spring
  5 -> May : Spring
  6 -> June : Summer
  7 -> July : Summer
  8 -> August : Summer
  9 -> September : Fall
  10 -> October : Fall
  11 -> November : Fall
*/

// function getSeason(month) {
//   switch (month) {
//     case 12:
//       console.log("December : Winter");
//       break;
//     case 1:
//       console.log("January : Winter");
//       break;
//     case 2:
//       console.log("February : Winter");
//       break;
//     case 3:
//       console.log("March : Spring");
//       break;
//     case 4:
//       console.log("April : Spring");
//       break;
//     case 5:
//       console.log("May : Spring");
//       break;
//     case 6:
//       console.log("June : Summer");
//       break;
//     case 7:
//       console.log("July : Summer");
//       break;
//     case 8:
//       console.log("August : Summer");
//       break;
//     case 9:
//       console.log("September : Fall");
//       break;
//     case 10:
//       console.log("October : Fall");
//       break;
//     case 11:
//       console.log("November : Fall");
//       break;
//     default:
//       console.log("Invalid Month!");
//   }
// }

// let month = 8; // September
// getSeason(month); // Output: Fall

// Types of functions

// #1: Function Declaration

/* function functionName() {
  // Your logic here
  return "Function Declaration";
}

console.log(functionName());
 */
// #2: Function Expression
/* const myFunction = function () {
  // Your logic here
  return "Function Expression";
} */

// #3: Arrow Function
/* const newFunction = () => {
  // Your logic here
  return "Arrow Function";
}
console.log(newFunction());
*/

// Map in JavaScript. Map is a predefined JS function that is used to transform each value in an array and return a new array with the transformed values.

// Multiplying each value by 2 in the original array

const nums = [2, 8, 19, 12, 13];
// Passed function is an anonymous function
const result = nums.map(function Munna(value, index) {
  return index * 2;
});

// Passed function is an arrow function
const result2 = nums.map((value, index) => {
  return value ** 2;
});

// Simplifying the arrow function; no return statement if one-liner
const result3 = nums.map((val, idx) => val - 1); // Under the hood, it understands that one-liner is has a return statement.

console.log(result3); //  [1, 7, 18, 11, 12] transformed values

