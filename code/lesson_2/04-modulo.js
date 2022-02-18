// / * + - 

// Modulo operator %
// "Rest of division"

a = 20;
restDivideBy3 = a % 3; // 20 / 3 = 6, rest 2
restDivideBy4 = a % 4; // 20 / 4 = 5, rest 0

console.log(restDivideBy3);
console.log(restDivideBy4);

// You are given a number as input
b = 16;
// Print "YES" if the number is even;
// Print "NO" if the number is odd;
// Even numbers e.g. 2, 4, 6, 186...
// Odd numbers e.g. 5, 7, 9

// Even number = if the number % 2 === 0

rest = b % 2;

if (rest === 0){
    console.log("YES, even!");
} else {
    console.log("NO, odd!");
}