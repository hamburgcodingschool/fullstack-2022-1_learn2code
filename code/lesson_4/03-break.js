
// Does a number like this exist?

for (i=1; i<1000000; i++){
    if(i%3===0 && i%4===0 && i%5===0){
        console.log("YES " + i);
        break;
    }
}
console.log("The FOR loop is DONE!");