readlineSync = require('readline-sync')

inputFromUser = readlineSync.question("Please give me a number.");

while(isNaN(inputFromUser)){
    console.log("This is not a number. Try again");
    inputFromUser = readlineSync.question("Please give me a number.");
}

console.log("Thanks! You gave me a number!");
console.log(inputFromUser);

