let inputSentence = "abcxyz";
alphabet = "abcdefghijklmnopqrstuvwxyz";
let outputSentence = "";

for(let i=0; i < inputSentence.length; i++){
	let currentLetter = inputSentence[i];
	let currentLetterIndex = alphabet.indexOf(currentLetter);
	let newIndex = currentLetterIndex + 3;
    
    console.log("New index in alphabet: " + newIndex);
    if (newIndex > alphabet.length - 1) {
        console.log("This letter " + currentLetter + " is outside of the alphabet");
        // 26 -> 0
        // 27 -> 1
        // 28 -> 2

        // outputSentence = outputSentence + alphabet[newIndex - alphabet.length];
        outputSentence = outputSentence + alphabet[newIndex % 13]
    } else {
        outputSentence = outputSentence + alphabet[newIndex];
    }
	
}

console.log(outputSentence);

// E1. Add a check for whitespaces " " and other special characters;
// E2. Handle the case when the inputSentence contains one of: x, y or z;



// console.log("Current letter: " + currentLetter);
// console.log("Current letter's index in alphabet: " + currentLetterIndex);
// console.log("New index in alphabet: " + newIndex);
// console.log("New letter " + alphabet[newIndex]);
// console.log(outputSentence);