// Comparison Operators

age = 12;

console.log(age > 12);
console.log(age >= 12);
console.log(age <= 12);
console.log(age < 18);

// == !=
console.log("###")
console.log(age == 12);
console.log(age != 12);

// E5. 
// We define a variable for the users' age; We want to check if they are over 18, in order to be able to drink beer or not;
// Print the following messages: "You are able to drink beer, since you were born in the year: 1992" OR
// "You are NOT able to drink beer, since you were born in the year: 2016"

age = 16;
currentYear = 2022;


if (age > 18){
    console.log("You are able to drink beer, since you were born in the year: " + (currentYear-age));
} else {
    console.log("You are NOT able to drink beer, since you were born in the year: " + (currentYear-age));
}
