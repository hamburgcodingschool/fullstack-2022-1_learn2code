a = 12;
b = "text";

console.log(typeof a);
console.log(typeof b);

bAsNumber = Number(b);

console.log(bAsNumber);
console.log(typeof bAsNumber);

c = "12";
cAsNumber = Number(c);
console.log("cAsNumber type: \n");
console.log(typeof cAsNumber);

if (a == b) {  // a == NaN // this tries to convert b to a number
    console.log("Equal!");
} else {
    console.log("Not Equal!");
}



console.log("\n");

test1 = Number("234");
console.log(test1);
console.log(typeof test1);

test2 = Number("a random text");
console.log(test2);
console.log(typeof test2);

test3 = Number(true);
console.log(test3);
console.log(typeof test3);

test4 = Number(false);
console.log(test4);
console.log(typeof test4);


maxNumber = Number.MAX_VALUE;
minNumber = Number.MIN_VALUE;
console.log(maxNumber);
console.log(minNumber);


piFromMathObject = Math.PI;
console.log(piFromMathObject);

// if (12 == "12") // TRUE
// if (12 === "12") // FALSE