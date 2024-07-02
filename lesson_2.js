console.log('Lesson 2');

// About arrays
/**
 * Timer : 25 minutes
 */

// Question #1: Write a program to store fruits : apples, bananas, mango in an array. Print the array to the console

var threeitoms = ['apples', 'bananas', 'mango'];
console.log(threeitoms);

// Question #2: Remove the last element of the array and print it to the console, and then print the array

console.log("removiing last iteoms in the arrary... and printing it");
lastitoms = threeitoms.pop();
console.log(lastitoms);
console.log('printing the remaining arry');
console.log(threeitoms);


const maya = ['pop', 'lol', 'shift', 'pragati', 'muskan'];
lastdigit = maya.unshift('Woman', 'man');
console.log(maya);


/**
 * Timer : 20 minutes
 */

// Question #3: Make an array of household items, print the array and remove the first item, then print it
let household = ['knife', 'bowl', 'plate', 'glass'];
console.log(household);
fristitoms = household.shift();
console.log(fristitoms);
console.log(household); 
// Question #4: For the same array, add two more items to the array and then print it

const household1 = ['knife', 'bowl', 'plate', 'glass'];
console.log(household1);
addtwoitomsinthefrist = household1.unshift('laptop', 'desktop');
console.log("addtwoitomsinthefrist");
console.log(household1);

// How to add an element to the end of an array
  
const animals = ['leopard', 'tiger', 'chimpanzee', 'gorilla'];

console.log(animals);

const addedEle = animals.push('kangaroo');

// console.log(animals[animals.length - 1]);
console.log(animals);


// How to add an element at a specific position in an array
              // 0       1        2         3          4
const birds = ['swan', 'kite', 'vulture', 'hawk', 'flyingHorse'];


// console.log(birds);




// add one item at position no. 3
birds.splice(3, 0, 'pyarelal', 'topalal', 'Muskan');
// console.log('pyarelal added at the position 3');
console.log(birds);

// delete one item at position 2
birds.splice(2,1);
console.log('delate one itoms at the position 2');
console.log(birds);

// deleting and adding elements at postion 1
birds.splice(1,1, 'Munnalal');
console.log('deleting and adding an itoms at the position 1');
console.log(birds);



/**
 * Timer : 10 minutes
 */
// Take the above birds array and slice it from index 1 to index 4
// Expected output: ['Munnalal', 'pyarelal', 'hawk', 'flyingHorse']

const slicedArray = birds.slice(1,5);
console.log("This is a sliced array: ", slicedArray);


// Concat

// const fruits = ['Banana', 'Apple', 'Grapes'];
// const Vagetabiles = ['Ladyfinger', 'Potate', 'Tomato'];
// const MansName = ['Munna', 'Rafi', 'Elyash'];

// const fruitsAndVagetabiles = fruits.concat(Vagetabiles);
// console.log(fruitsAndVagetabiles);
// const combine = fruits.concat(Vagetabiles, MansName);
// console.log(combine);


// Output = ['Banana', 'Apple', 'Grapes','Ladyfinger', 'Potate', 'Tomato', 'Munna', 'Rafi', 'Elyash'];


// console.log("sorting in Array"); 
// const combine = ['Banana', 'Apple', 'Grapes','Ladyfinger', 'Potate', 'Tomato', 'Munna', 'Rafi', 'Elyash'];

// combine.sort();
// console.log(combine);

// Output = ['Apple', "Banana", 'Elyash', 'Grapes', 'Ladyfinger', 'Munna', 'Potate', 'Rafi', 'Tomato']

// Sorting numbers
// const numbers = [5, 3, 10, 2, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// Sorting numbers
// const numbers = [5, 3, 10, 2, 6, 0.2, 0.1, 0.8, -0.8, 0.9];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const objectArr = [{id: 102}, {id: 101}, {id: 100}];
// objectArr.sort((a, b) => b.id - a.id);
// // objectArr.sort();
// console.log(objectArr);

// join methord 

// const Munna = ['m', 'n', 'a', 'f'];
// const str = Munna.join('');
// console.log(str);
// // "MUNNA"
// // /21346
// console.log(Munna);

// reversing an Array
// const reverse = ['Munna', 'Rishi', 'Kaliya', 'Genda'];
// const result = reverse.reverse();
// console.log(result);


// converting a string into array

// const str = 'Munna';

// const strToArray = str.split('');
// console.log(strToArray);

// ['M', 'u', 'n', 'n', 'a']


// Write a function to reverse a string:

function reverseStr(str) {
  
    // return str.split('').reverse('').join('');
    const reverse = str.split('');
    reverse.reverse('');
    const reverseStr = reverse.join('');
    return reverseStr;
}

console.log(reverseStr("hello"));

// const hello = 'hello';
// const str = hello.split('')
// console.log(str);
// const hey = str.reverse('');
// console.log(hey);
// const join = str.join('');
// console.log(join);
