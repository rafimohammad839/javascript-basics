// Ternary Operator
// It is used instead of if-else

// const a = 10;
// const b = 10;

// const result = a === b ? "Both are equal" : "Different values";

// console.log(result);

// const result2 = a == b ? (a === b ? (a < 20 ? "Good value" : "Bad value") : false) : "Values are different";

// console.log(result2); // Values are different

// Template Literals: Template literals are identified by ` character

const person = {
    name: "Munna",
    age: 60,
    profession: "Plumber",
    destination: "Dubai",
    working: true
  }
  
  // Munna is my friend who is 60 years old and is currently working but is desperate to move to Dubai
  
  console.log(person.name + " is my friend who is " + person.age + " years old and is currently " +  (person.working ? "working" : "not working") + " but is desperate to move to " + person.destination);
  
  // console.log(`${person.name} is my friend who is ${person.age} years old and is currently ${person.working ? "working" : "not working"} but is desperate to move to ${person.destination}`);
  
  // Question #1: Create an object namely company. Fields are: name, location, revenue. Create a function that takes in company object and returns a template string: eg., Cognizant is based in New Jersey and has a revenue of $100B
  
const company = {
    name: "Cognizant",
    location: "New Jersey",
    revenue: "$100B",
    
}


  console.log(giveCompanyDescription());
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* const a = 10; // typeof a => number
  const b = "10"; // typeof b => string
  
  console.log("Checking type of a: ", typeof a);
  console.log("Checking type of b: ", typeof b);
  
  console.log("Only checking values: ", a == b); // true
  console.log("Checking values as well as data types", a === b); // false */