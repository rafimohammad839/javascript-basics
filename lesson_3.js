// About JS Objects

// Object consists of key-value pairs : 

/**
 * Timer : 25 minutes
 */

// Question #1: Create an object namely company. It should have revenue: "$5000B" and location: Dubai and employees: 2500

const company = {
    name: 'XYZ',
    revenue: '$5000B',
    locations: 'dubai',
    employees: 2500
}

console.log(company);

// Question #2: Change the location of the company from Dubai to San Fransisco and delete the key employees

 company.locations = 'San fransisco';
 console.log(company);

 delete company.employees;

 console.log(company);

//  Question #3: Create an obj namely person which should have name, age and address which is itself an object containing city and country

const person = {
    name: 'Rafi',
    age: 25,
    address: {
        city: 'noida',
        country: 'india',
    }
}

console.log(person);