// Map in JavaScript
// Map is just like a JS Object with key-value pairs
// console.log('Lesson 6');

let map1 = new Map();

map1.set('Elyash', 100);
map1.set('Rafi', 101);
map1.set('Munna', 102);

console.log();
munna1 = map1.get("Munna"); 
// const valuesIterator = map1.values();

// const firstValue = valuesIterator.next().value;
// const secondValue = valuesIterator.next().value;
// const thirdValue = valuesIterator.next().value;

// console.log(secondValue, thirdValue);

// map1.delete('Munna')
const hasMunna = map1.has("Munna");
map1.set('lol pop', 1010);
console.log(map1);
console.log(hasMunna);



// Question #1: Take an array nums and target in a function and check if there exist three values in the array that add upto the target. Return their indices.
  
//       0  1  2  3  4  5
nums =  [2, 7, 1, 6, 8, 2] , target = 10


function sumofThreeNumber(nums, target) {
  
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i];
      }
      map.set(nums[i], i);
  }
  return null;
}


let result = sumofThreeNumber(nums, target);
console.log(result);