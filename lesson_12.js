// JavaScript filter method
// filter method is used to filter out array elements based on a predicate. It is like a loop.
// A predicate is a conditional function that returns a truthy or falsy value. If it returns truthy value, then the element is included, otherwise skipped.

const cars = ["Mercedes", "Lamborghini", "BMW", "Maruti Suzuki"];
// length > 4: ["Mercedes", "Lamborghini", "BMW", "Maruti Suzuki"]
// first letter starts with M : Output: ["Mercedes", "Maruti Suzuki"]

const filteredCars = cars.filter(function (car, index) {
  return car.length > 4;
});

console.log("Based on length > 4", filteredCars);

const filteredCars2 = cars.filter(function (car, index) {
  return car.startsWith("M");
})

console.log("Cars that only start with M", filteredCars2);

// Filter out tickets that do not have a destination: Dubai
const travelTickets = [
  {
    ticketId: 3452424,
    passenger: 'Munna',
    destination: 'Ladakh',
    price: 8000
  },
  {
    ticketId: 3452425,
    passenger: 'Munna 2',
    destination: 'Saudi',
    price: 15000
  },
  {
    ticketId: 3452427,
    passenger: 'Munna 3',
    destination: 'Dubai',
    price: 15000
  },
  {
    ticketId: 3452428,
    passenger: 'Munna 4',
    destination: 'Quwait',
    price: 35000
  },
  {
    ticketId: 3452428,
    passenger: 'Munna 5',
    destination: 'Dubai',
    price: 15000
  },
];


/* const filteredTickets = travelTickets.filter(function (travelTicket) {
  return travelTicket.destination === 'Dubai';
}); */

// console.log("Tickets with destination Dubai: ", filteredTickets);

// price greater than 15000 and (ampersand) less than 40000

const filteredTickets2 = travelTickets.filter(function (travelTicket) {
  return travelTicket.price >= 15000 && travelTicket.price <= 40000;
});

console.log("Tickets that fall within price range of 15000 and 40000: ", filteredTickets2);

/* 
  Exercies:

  Question #1: Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filterEvenNumbers(numbers)); // [2, 4, 6, 8, 10]


  Question #2: Write a function filterLongWords that takes an array of strings and a number n, and returns a new array containing only the strings that are longer than n characters.

  const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
  console.log(filterLongWords(words, 5)); // ["banana", "cherry", "elderberry"]

  Question #3: Write a function filterByAge that takes an array of objects representing people and a minimum age, and returns a new array containing only the people who are older than the minimum age.

  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 },
    { name: "David", age: 15 },
    { name: "Eve", age: 28 }
  ];

  console.log(filterByAge(people, 18)); // [{ name: "Alice", age: 25 }, { name: "Charlie", age: 32 }, { name: "Eve", age: 28 }]

  Question #4: Write a function filterBySubstring that takes an array of strings and a substring, and returns a new array containing only the strings that contain the given substring.

  const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
  console.log(filterBySubstring(words, "an")); // ["banana"]

  Question #5: Write a function filterDivisibleBy that takes an array of numbers and a divisor, and returns a new array containing only the numbers that are divisible by the given divisor.

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filterDivisibleBy(numbers, 3)); // [3, 6, 9]
  
*/