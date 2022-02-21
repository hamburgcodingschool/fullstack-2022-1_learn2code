// push() to add elements to the array
ages = [16, 19];
console.log(ages);

ages.push(24);
console.log(ages);

ages.push(26, 28, 30);
console.log(ages);

// pop()
ages.pop();
console.log(ages);
ages.pop();
console.log(ages);
ages.pop();
console.log(ages);
// console.log(lastAge);

readlineSync = require('readline-sync')

// E1. 
// Ask the user for a letter;
// Check if the input is a vowel or a consonant;

letter = readlineSync.question("Write a letter please \n");

if (letter === "a" || letter === "e" || 
    letter === "u" || letter === "i" ||
    letter === "o"){
    console.log("vowel");
} else {
    console.log("consonant")
}

vowels = ["a", "e", "i", "o", "u", "A", "E", "I"];
if (vowels.includes(letter)){
    console.log("vowel");
} else {
    console.log("consonant");
}

