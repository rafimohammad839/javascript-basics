// // Other object methods

// // Object.keys(obj) 

const flight = {
    seatNo: 40,
    class: 'economy',
    boarding: 'Delhi',
    destination: 'Dubai',
    stewardess: true
}

const keys = Object.keys(flight);
console.log(keys);

const entries = Object.entries(flight);
console.log(entries);
// [[seatNo: 40], [class: 'economy'], [boarding: 'Delhi'], [destination: 'Dubai']]

console.log(Object.keys(flight));

// const attendants = [['Rafi', 1], ['Elyash', 2], ['Alok', 3], ['Amit', 4]]

// console.log(Object.fromEntries(attendants));
// // console.log(Object.fromEntries(attendants));        

// // for (let key in flight) {
// //     console.log(key);
// // }


// for (let key in flight){
//     console.log(key);
// }


// // Shallow cloning i.e., copying

// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3
//     }
// }



// // Object.assign({}, obj)
// const copy3 = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3
//     }
// }

// obj.c === copy3.c


// // Spread operator
// const copy = {...obj};

// console.log(obj);
// console.log('Copied object: ', {...obj});


// // Object.assign 
// const copy2 = Object.assign({}, obj);
// // console.log("Second copied object is ", copy2);

// console.log("Second copied object is ", Object.assign({}, obj));

// console.log(obj.c === copy.c)


// // Deep cloning

// const copy4 = JSON.parse(JSON.stringify(obj));

// console.log(copy4);

// const obj = {};
// const copy = obj;

// console.log(obj === copy);
console.log('Shallow Cloning');

// Question #1: Create an object person with properties: name, age, profession, address. Address is itself an object containing city and country and then clone it using spread operator

const obj = {
    name: 'Rafi',
    age: 25,
    profession: 'Engineer',

    address: {
        City: 'Noida',
        country: 'India'
    }
}
const copy = {...obj};
 console.log(copy);
// Question #2: Now clone the same object person using Object.assign method

const copyobject = Object.assign({}, obj);

console.log(copyobject);

console.log('address of both objects is different');
console.log(obj===copy);

console.log(obj.address===copy.address);

// Deep cloning

// Question #3: Make an object namely company having name, yearStarted, employee and address which is a nested object containing lane and city. Now clone this object deeply and verify that the address of the original object is not equal to that of the cloned object.

const company = {
    name: "To The New",
    yearStarted: 2024,
    employee: 100,
    address: {
        lane: 'gali number 2',
        city: 'Noida'
    }
}

const company2 = JSON.parse(JSON.stringify(company));
console.log(company2); // deep cloning

// console.log(JSON.parse(JSON.stringify(company)));

console.log('verification', company.address===company2.address); // verification

// Question #4: Use the above object and loop over it using for-in loop and print each key individually


for (let key in company2){
   if(typeof(company2[key]) === 'object') {
        for (let innerKey in company2[key]) {
            console.log(innerKey);
        }
   } else {
       console.log(key)
    }
};