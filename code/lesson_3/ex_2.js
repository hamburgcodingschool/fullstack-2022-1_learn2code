readlineSync = require('readline-sync')

// E2. 
// Ask the user for a number;
// Check if the number is odd or even;

a = readlineSync.question("Write a number please \n");
console.log(a);
console.log(typeof a);
rest = a % 2;
console.log(typeof rest);
if (rest === 0){
    console.log("YES, even!");
} else {
    console.log("NO, odd!");
}