// E3. 
// Ask the user for their age;
// Calculate their birthYear; Print the following message:
// "You were born in the year: 1982" 
readlineSync = require('readline-sync')

a = readlineSync.question("What is your age? \n");
birthYear = 2022 - a;
console.log("You were born in " + birthYear);

