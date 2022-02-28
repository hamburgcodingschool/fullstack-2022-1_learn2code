
// void function
function printUsername(username){
    console.log(username);
}

printUsername("paul");

// functions that return something
function getSum(numberA, numberB){
    if (numberA < numberB){
        console.log("yes! smaller!");
    } else {
        console.log("no! not smaller!");
    }
    return numberA + numberB;
}

let sum = getSum(7, 6);
console.log(typeof sum);
console.log("the sum is: " + sum);

// functions can return: numbers, strings, boolean, objects

function isEven(number){
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

function isEven2(number){
    return number % 2 === 0;
}

function isLarger(number){
    return number > 10;
}

console.log(isEven(5));
console.log(isEven(6));

console.log("HERE");
console.log(isEven2(15));
console.log(isEven2(16));
console.log(isLarger(19));
console.log(isLarger(9));

function greetUser(name, greeting){
    return greeting + " " + name + "!";
}

let greetingForPaul = greetUser("Paul", "Hi there");
let greetingForFlorian = greetUser("Florian", "Hallo");


console.log(greetingForPaul);
console.log(greetingForFlorian);

while(true){
    console.log("waa");
}