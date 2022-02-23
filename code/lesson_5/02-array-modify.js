// Sometimes we may want to change the values 
// of individual array elements

let prices = [13, 14, 15, 16];

prices[0] = 18;
console.log(prices);

// increase all prices in the array with 10 EUR:
for (let i = 0; i< prices.length; i++){
    prices[i] = prices[i] + 10;
}

console.log(prices);
