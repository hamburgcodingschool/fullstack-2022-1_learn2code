readlineSync = require('readline-sync')

// E1. 
// Ask the user for a letter;
// Check if the input is a vowel or a consonant;

userName = readlineSync.question("Write a letter please \n");

if (letter === "a" || letter === "e"){
    console.log("vowel");
} else {
    console.log("consonant")
}