// Arrays store lists of values;

letterA = 'a';
letterE = 'e';
letterU = 'u';
vowels = [letterA, letterE, letterU];

ages = [18, 19, 45, 60, 24];
names = ["Florian", "Paul", "Katja", "Frederik", "Angelica"];
flagsLivesInHamburg = [false, true, true, true, true];

console.log(ages[0]);
console.log(names[1]);

console.log(typeof ages);

console.log("There are: " + ages.length + " elements in the ages array");
console.log(ages);
console.log("The first element in the ages array is: " + ages[0]);

console.log("The last element in the ages array is: " + ages[ages.length - 1]);
console.log(ages[-1]);


ages = [18, 19, 45, 60, 24];
names = ["Florian", "Paul", "Katja", "Frederik", "Angelica"];
flagsLivesInHamburg = [false, true, true, true, true];


for (i=0; i<ages.length; i++){
    console.log(ages[i]);
    console.log(names[i]);
    console.log("lives in Hamburg?: " + flagsLivesInHamburg[i]);
}

