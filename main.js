const MM = "Mixed Messages";
const welcome = `Welcome to ${MM}`;
console.log(welcome);
// ------------------------------------------
// | Function getRandom()                   |
// | called like: getRandom()               |
// | will return a random number between    |
// | 0 and 9                                |
// |----------------------------------------|
// | called like: getRandom(52)             |
// | will return a random number between    |
// | 0 and 51                               |
// |________________________________________|
// This is an easy function to call when needing an unsecure random number
// without having to type out the "full chain" of "Math." function calls each time.
// Default Parameter is 10 such that getRandom() === getRandom(10)
// Default parameter may change and is a place holder at this point
// Math.floor(Math.random()*(MaxNumber); // is the standard way to generate a random number. MaxNumber is the max value.
const getRandom=(maxNum=10)=>
{
 return Math.floor(Math.random()*maxNum);
}
//// Test Functions
//// Generate Random Number (Default parameter (10))
//console.log(getRandom());
//// Generate Random Number 2 (Default parameter (10))
//console.log(getRandom());
//// Generate Random Number 3 (input 999);
//console.log(getRandom(999));

// Function to select a random element to reduce the amount of typing ".length"
const getRandElem=(listIn)=>{
 return listIn[getRandom(listIn.length)];
}

const randA = ["First Set of Random to Build From"];
const randB = ["Second Set of Random to Build From"];
const randC = ["Third Set of Random to Build From"];

console.log(randA[getRandom(randA.length)]);
console.log(getRandElem(randA));
