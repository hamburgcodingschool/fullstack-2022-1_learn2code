console.log(x);

let x = 100;        // default here is let -> ReferenceError 
                    // similar to python
                    // what we expect

                    // var is confusing! (global scope / function scope)
console.log(x);

// use let! smallest scope that is needed;


// Here default is let - similar to python

// if (false){
//     let a = 10;
// }
// console.log(a);  // let -> ReferenceError, just like python
// if we make it var, it will be "undefined" - wtf?

// here default is var - similar to python - and will print it at the end;
// for (i = 0; i<10; i++){
//     var sum = 5;
//     if (true){
//         let age = 18;  
//     }
// }

// console.log(age);   // var -> will print it;
//                     // let -> reference error - limits it to this block
// console.log(sum);   // var -> will print it;
//                     // let -> ReferenceError - limits it to this block







// for (i = 0; i<10; i++){ // here default is var
//     console.log(i);
// }
// console.log("done");
// console.log(i); // Reference error with 'let' - NOT like python
//                 // var will print it - like python;


// var - scope is NOT limited to the block in which it is defined
// this is NOT how most programming lanuages work