
let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR"
}

let b2 = {
    title: "The godfather",
    price: 40,
    currency: "USD"
}

// this comes from the database
let books = [b1, b2];

// Increase the price of all books by 10 percent;
function increasePrice(b){
    b.price += 10/100 * b.price;
}

for(let i=0; i<books.length; i++){
    increasePrice(books[i]);
}

console.log(books);

// foreach - callback functions
books.forEach(increasePrice);

console.log(books);