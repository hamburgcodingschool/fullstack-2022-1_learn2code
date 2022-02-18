readlineSync = require('readline-sync')

userName = readlineSync.question("What is your name?\n");

// userName = "Paul";
console.log("Hello, " + userName);

age = readlineSync.question("How old are you?\n");
console.log("Wow, that's old, man ");
