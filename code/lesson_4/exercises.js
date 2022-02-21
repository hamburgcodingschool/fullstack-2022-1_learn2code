// For loop exercises

// While loop exercises

// E1. Print all even numbers between 10 and 20 (including 10 and 20). An even number is a number
// x for which the following is true: x % 2 === 0

// i * 5 === 10
// i / 2 === 3
// i + 5 === 7
// i % 2 === 0

for (i=10; i<=20; i=i+1){
    if(i % 2 === 0){
        console.log(i);
    }
}

for (i=10; i<=20; i+=2){
    console.log(i);
}

// E2. Iterate from 0 to 50; Print "##" for even numbers and "!!" for odd numbers;

for (i = 0; i < 51; i++ ) {
    if (i % 2 === 0) {
        console.log("##");
    }  else {   
        console.log("!!");
    }
} 
 
// E3. Print all numbers from 10 to 0 in descending order;

for (i=10; i >= 0; i--) {
    console.log(i);
}

// E4. Find the max number in the interval [10,100] which is divisible with 3, 4 and 5;


for (i=120; i > 9 ; i--) {
    if (i % 3 === 0 && i % 4 === 0 && i % 5 === 0) {
        console.log(i);
        break;
    }
}


// E5. Print only the first 3 even numbers in the interval [10, 100]; 


// Arrays - read

ages = [12, 16, 24, 98, 64, 24, 98, 64, 24, 98, 64]
// Print all the ages in your array :)
// We use the for loop

for (let i = 0; i < ages.length; i = i + 1){
    let currentAge = ages[i];
    console.log("Position is: " + i);
    console.log("Value is: " + currentAge);
}

// E0. Print all the ages in the array in reverse order;
for (let i = 0; i < ages.length; i = i + 1){
    console.log(ages[i]);
}

// E1. Print all positions of all ages greater than 18;
for (let i = 0; i < ages.length; i = i + 1){
    console.log(ages[i]);
}

// E2. Iterate through the array and calculate the sum of its values;
for (let i = 0; i < ages.length; i = i + 1){
    console.log(ages[i]);
}

// E3. Answer the question:
// Is there at least a person over 18 in this group?
// (break?)
for (let i = 0; i < ages.length; i = i + 1){
    console.log(ages[i]);
}

// Arrays - Create

ages = [12, 16, 24, 28, 69, 14, 13, 80] 
// E0. Copy all ages which are greater than 18 to a second array

largerThan18 = []
for (i=0; i < ages.length; i++){

}

console.log("Input: " + ages);
console.log("Result: " + largerThan18);

// E1. Create an array which contains the positions of all ages above 18

largerThan18Positions = []
for (i=0; i < ages.length; i++){

}

console.log("Input: " + ages);
console.log("Result: " + largerThan18Positions);


// E2
// Starting from the ages array, create two other arrays:
// underAge - containing the ages < 18 and legalAge - containing the ages >= 18
ages = [12, 16, 24, 28, 69, 14, 13, 80] 

legalAge = []
underAge = []
for (i=0; i < ages.length; i++){

}

console.log("Input: " + ages);
console.log("Result underAge: " + underAge);
console.log("Result legalAge: " + legalAge);

// E3. 
// Start with 2 hardcoded arrays, e.g. prices1 & prices2
// Calculate a third array that contains the sum of the elements in the first two arrays.

prices1 = [12, 16, 24, 28] 
prices2 = [1, 1, 1, 1]
pricesSum = []
for (i=0; i < prices1.length; i++){

}

console.log("Result: " + pricesSum);
// expected result: [13, 17, 25, 29] 
