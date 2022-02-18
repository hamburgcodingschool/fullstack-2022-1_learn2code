a = 104;
b = 108; 
c = 200;

max = b;
if (a > max){ // compare 108 to 104 - FALSE
    max = a;
}
if (c > max) { // compare 108 to 200 - TRUE
    max = c;
}
console.log("max is: " + max);