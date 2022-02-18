readlineSync = require('readline-sync')

userName = readlineSync.question("What is your name?\n");

console.log("Hi, " + userName + ", nice to meet you!");

if (typeof userName === Number){
    console.log("it is number!");
} else {
    console.log("it is not a number")
}

if (isNaN(userName)){
    
}