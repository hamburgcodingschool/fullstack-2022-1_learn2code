readlineSync = require('readline-sync')

// this ALWAYS GIVES US A STRING
month = readlineSync.question("What is the month? \n");

console.log(month);
console.log(typeof month);

// Solution 1 ... almost
if (typeof month === "string"){
    console.log("YES it is a STRING");
}
else {
    console.log("It is NOT a string");
}

// Check if the input is a number:
    // Convert it to a number
    // If conversion works -> it IS a number
    // If the conversion does NOT work -> it is NaN

monthAsNumber = Number(month);
console.log("I converted the string "+ month + " to a number. The result is: " + monthAsNumber);

if (isNaN(monthAsNumber)) {
    console.log("this IS a string, because conversion failed!");
} else {
    console.log("this is NOT a string, cause it converted to the number: " + monthAsNumber);
}


