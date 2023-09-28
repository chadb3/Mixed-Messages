const MM = "Mixed Messages";
const welcome = `Welcome to ${MM}`;
console.log(welcome);
// Standard function to generate Random Number
// Default Parameter is 10 such that getRandom() === getRandom(10)
// Default parameter may change and is a place holder at this point
// Math.floor(Math.random()*(MaxNumber); // is the standard way to generate a random number. MaxNumber is the max value.
const getRandom=(maxNum=10)=>
{
 return Math.floor(Math.random()*maxNum);
}

// Test Functions
// Generate Random Number (Default parameter (10))
console.log(getRandom());
// Generate Random Number 2 (Default parameter (10))
console.log(getRandom());
// Generate Random Number 3 (input 999);
console.log(getRandom(999));

