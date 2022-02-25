// readline-sync

// E1. 
// Ask the user for a letter;
// Check if the input is a vowel or a consonant;
/*readlineSync = require('readline-sync')
letter = readlineSync.question("Write a letter please\n");
console.log(letter);
if (letter === "a"||letter === "e"||letter === "i"||letter === "o"||letter === "u") {
console.log("This is a vowel");
} else {
    console.log("This is a consonant");
}
test = "a" || "e" || "i" || "o" || "u"
console.log(test);*/

// E2. 
// Ask the user for a number;
// Check if the number is odd or even;
/*readlineSync = require('readline-sync')
number = readlineSync.question("Write a number please\n");
modulo = number % 2;
if (modulo === 0){
    console.log("YES, even!");
} else {
    console.log("NO, odd!");
}*/
// E3. 
// Ask the user for their age;
// Calculate their birthYear; Print the following message:
// "You were born in the year: 1982" 
/*readlineSync = require('readline-sync')
age = readlineSync.question("Write your age\n");
birthdayYear = 2022 - age;
console.log("You were born in the year: " + birthdayYear);*/


// E4. 
// The length of a month varies from 28 to 31 days. 
// In this exercise you will create a program that reads the name of a month from the user as a string. 
// Then your program should display the number of days in that month. 
// Display “28 or 29 days” for February so that leap years are addressed.
readlineSync = require('readline-sync')
month = readlineSync.question("Write your month\n");
month = String(month);
console.log(month);
month = month.toLowerCase();
if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
    console.log("31 Days");
} else if (month === "february") {
    console.log("28 od 29 Days");
} else {
    console.log("30 Days")
}

test2 = Number("a random text");
console.log(test2);
console.log(typeof test2);

// E5.
// Ask the user for their age;

// Check if the number is in the [0, 120] interval; if NOT, print a message "This cannot be your real age"
// Check if the input year is a leap year: exactly divisible by 4 and NOT divisible by 100

