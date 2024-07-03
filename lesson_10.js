// Ternary Operator
// It is used instead of if-else

// const a = 10;
// const b = 10;

// const result = a === b ? "Both are equal" : "Different values";

// console.log(result);

// const result2 = a == b ? (a === b ? (a < 20 ? "Good value" : "Bad value") : false) : "Values are different";

// console.log(result2); // Values are different

// Template Literals: Template literals are identified by ` character

// const person = {
//     name: "Munna",
//     age: 60,
//     profession: "Plumber",
//     destination: "Dubai",
//     working: true
//   }
  
//   // Munna is my friend who is 60 years old and is currently working but is desperate to move to Dubai
  
//   console.log(person.name + " is my friend who is " + person.age + " years old and is currently " +  (person.working ? "working" : "not working") + " but is desperate to move to " + person.destination);
  
  // console.log(`${person.name} is my friend who is ${person.age} years old and is currently ${person.working ? "working" : "not working"} but is desperate to move to ${person.destination}`);
  
  // Question #1: Create an object namely company. Fields are: name, location, revenue. Create a function that takes in company object and returns a template string: eg., Cognizant is based in New Jersey and has a revenue of $100B
  
 const company = {
    name: "Cognizant",
    location: "New Jersey",
    revenue: "$100B",    
};
    function getCompanyInformation (company){
        return `${company.name} is based in ${company.location} and has a revenue of ${company.revenue}`;
    }


  console.log(getCompanyInformation(company)); 
  
  const Family = {
    fmialyleader: 'Munna',
    femaleleader: 'Wife of Munna',
    totalCildoOfMunna: '3 bache hai',
  };

  function getFamilyInformation (Family){
    return `${Family.fmialyleader} us ke  bibi ke name ${Family.femaleleader} in dono ke  ${Family.totalCildoOfMunna}`;
  }

  console.log(getFamilyInformation (Family));  
 