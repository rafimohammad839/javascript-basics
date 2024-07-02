console.log('Lesson 1');

// // Question #1 : Return 'Hello World' from a function


// // Question #2 : Take arguments a & b in a function and return its sum

// Question #1 : Solved

function hello_world() {
    return "Hello World";
}

console.log (hello_world());

// Question #2 solved
function sum(a,b){
    return a+b;
}
console.log (sum(-20,5));

// Question #3 : Write a function to find if the number is even or odd

function lol(numbers){
if (numbers % 2===0) {
    // console.log "even";
    console.log("this number is Even", numbers);
} else {
    console.log("this number is odd", numbers);
}
}
// lol(8); // EVEN
// lol(4); //  EVEN
lol(3); // odd

// Question #4 : Print numbers from 1 to 5 through a loop


for (let i = 1; i <=5; i++){
    console.log(i);
}


// Question #5: Determine if a number is negative, positive or zero using function

function numberusingstring(number){
    if (number > 0){
        console.log("number is positive", number);
    }else if (number <0){
        console.log("number is negative", number);
    }else {
        console.log("number is zero", number);
    }
}

numberusingstring(55);
numberusingstring(-43);
numberusingstring(0);
// Question #6: Take two strings in function and concatenate (add) them and return them


function dude(aa,b,c){
  return aa+b+c;
}
console.log(dude("khan"," ","pop"));

