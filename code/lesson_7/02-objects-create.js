// Object = set of properties

let userObject = {
    firstName: "Paul",       // string property
    age: 29,
    hasDriversLicense: true
};

console.log(userObject.firstName);

if (userObject.age > 18){
    console.log("Is allowed to drink");
}

let paulsAge = userObject.age;

userObject.age = 30;
console.log(userObject);
