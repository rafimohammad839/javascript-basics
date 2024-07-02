// Destructuring of arrays and objects

// 1. Arrays

// const arr = [1, 2, 3, 4, 'pope', 'john', 'aliya'];

// const [a, b, c, d] = arr;

// console.log(c, d);

// 2. Objects

// const obj = {
//     name: 'Peter',
//     city: 'Sydney',
//     state: 'New South Wales',
//     profession: 'The Junction Works'
// }

// obj.country = 'Australia'

// const {name, city, profession, country} = obj;


// console.log(name, city, profession, country);

// Timer : 30 mins

// // Question #1: Make an array of vegetables (max 5) and take out 2nd and 3rd vegetables from it using destructuring, then print them

// let veg = ['row banana', 'ladyfinger', 'potato', 'tomato', 'kidney bean'];

// // let [a, b, c, d, e] = veg;

// let [_,__, ___, d, e] = veg;

// console.log(__, ___);



// Question #2: Here is the object

const person = {
    name: 'Ryan',
    city: 'Sydney',
    profession: 'IT Engineer'
}

// Take out name, city and profession from person object and in the console, print this statement 'Ryan lives in Sydney and is an IT Engineer\


const {name, city, profession} = person;

console.log(name,'lives in', city, 'and is an', profession);
