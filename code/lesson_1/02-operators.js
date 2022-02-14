age = 28;
distance = 100;
cityName = "Hamburg";

// Mathematical Operators
// +, -, *, / - between numerical variables

a = distance + age;
b = distance - age;
c = distance * age;
d = distance / age;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// +, -, *, / - between numerical & text variables

x = cityName + 2;
xx = 2 + cityName;
y = cityName - 2;
z = cityName * 2;
zz = 2 * cityName;
u = cityName / 2;

console.log(x)
console.log(xx)
console.log(y)
console.log(z)
console.log(zz)
console.log(u)


// E3 
// a. Create a variable to store the price of a ICE ticket;
// b. Create a variable to store the price of a Regio ticket;
// c. Print the difference between the two prices;
// d. Print the difference within a sentence ("The difference is: 35 EUR")
iceTicket=89;
regioTicket=45;
console.log((iceTicket-regioTicket));
console.log("The difference is: " + (iceTicket-regioTicket) + " EUR");


// E4
// Start with a predefined 'budget' variable
// a. Create 2 more variables to store the cost of one night in a hotel and 
// the cost of one night in camping
// b. Calculate what is the maximum number of nights you can stay in your trip
// c. Print out the results

// Expected outcome:
// "We can stay for maximum 2 nights if we go to a hotel";
// "We can stay for maximum 5 nights if we go camping";


totalBudget = 300;
campingPerNight = 7;
hostelPerNight = 25;


maxNightsCamping = totalBudget / campingPerNight;
maxNightsHostel = totalBudget / hostelPerNight;
maxNightsHotel = totalBudget / hotelPerNight;

console.log("We can stay for maximum " + maxNightsCamping + " nights if we go camping");
console.log("We can stay for maximum " + maxNightsHostel + " nights if we go to a hostel");
console.log("We can stay for maximum " + maxNightsHotel + " nights if we go to a hotel");