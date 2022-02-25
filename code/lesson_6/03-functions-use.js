// Functions - blocks of code which we can reuse;
// Write 1 time; use 1000 times; 

function printCurrentYear() {       // function declaration
    console.log("Das Jahr ist 2022." + "hello");
    if (5 > 0){
        console.log("And math still works.");
    }
}

printCurrentYear();     // function call

function printMonthName(monthName) {
    console.log("The month name is: " + monthName);
}

printMonthName("April");
printMonthName("June");
printMonthName("July");

let userBirthMonth = "December";
printMonthName(userBirthMonth);

let parentBirthMonth = "September";
printMonthName(parentBirthMonth);
