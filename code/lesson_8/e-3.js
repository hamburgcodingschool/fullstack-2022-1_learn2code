
// E3
// 3.1 Write a function that takes a book as a parameter 
// and decreases the price 
// of a book to half of its value

// this comes from the database;
let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR",
    author: {
        lastName: "Anton"
    }
}

function halfPrice(object){
    object.price = object.price / 2;
}

console.log(b1);
halfPrice(b1);
halfPrice(b1);
console.log(b1);