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
// Added secondary getRandom to pick between a min and max number
// ------------------------------------------
// | Function getRandom2()                  |
// | called like: getRandom2()              |
// | will return a random number between    |
// | 0 and 9                                |
// |----------------------------------------|
// | called like: getRandom2(10,52)         |
// | will return a random number between    |
// | 10 and 51                              |
// |________________________________________|
const getRandom2=(minNum=0,maxNum=10)=>
{
 return Math.floor(Math.random()*(maxNum-minNum)+minNum);
}
//// Test Functions
//// Generate Random Number (Default parameter (10))
//console.log(getRandom());
//// Generate Random Number 2 (Default parameter (10))
//console.log(getRandom());
//// Generate Random Number 3 (input 999);
//console.log(getRandom(999));

// Function to select a random element to reduce the amount of typing ".length"
// the expected parameter is a list of random values
const getRandElem=(listIn)=>{
 return listIn[getRandom(listIn.length)];
}
// Function to split a string into individual words.
const splitStringGetWord=(stringIn)=>
{
	return stringIn.split(' ');
}
// randA = a Greeting to start the randomness 
const randA = ["Greetings","Hello","Hi","It's you...", "How do you do?","Good Day!"];
const randB = [
 "Live, Laugh Love",
 "The \"var\" statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.", 
 "The \"forEach()\" method of Array instances executes a provided function once for each array element. ", 
 "\"The man who does not read books has no advantage over the one who cannot read them.\" — Mark Twain ",
 "Amazon Kinesis - cost-effectively processes and analyzes streaming data at any scale as a fully managed service. With Kinesis, you can ingest real-time data, such as video, audio, application logs, website clickstreams, and IoT telemetry data, for machine learning (ML), analytics, and other applications.",
 "The [@@iterator]() method of \"Map\" instances implements the iterable protocol and allows Map objects to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns a map iterator object that yields the key-value pairs of the map in insertion order.", 
 "The \"filter()\"  method of Iterator instances returns a new iterator helper that yields only those elements of the iterator for which the provided callback function returns true.",
 "\“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\”― Roy T. Bennett, The Light in the Heart ",
 "\“The way to get started is to quit talking and begin doing. \”― Walt Disney ",
 "The \"reduce()\" method of Iterator instances is similar to Array.prototype.reduce: it executes a user-supplied \"reducer\" callback function on each element produced by the iterator, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements is a single value.",
 "Amazon EMR is the industry-leading cloud big data solution for petabyte-scale data processing, interactive analytics, and machine learning using open-source frameworks such as Apache Spark, Apache Hive, and Presto.",
 "Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools.",
 "The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. ",
 "\"If you want to achieve greatness stop asking for permission.\" --Anonymous",
 "A \"for\" loop repeats until a specified condition evaluates to false. The JavaScript \"for\" loop is similar to the Java and C for loop.",
 "A \"while\" statement executes its statements as long as a specified condition evaluates to true.",
 "JavaScript's String type is used to represent textual data. It is a set of \"elements\" of 16-bit unsigned integer values (UTF-16 code units). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. You can create strings using string literals or string objects.",
 "Amazon Relational Database Service (Amazon RDS) is a collection of managed services that makes it simple to set up, operate, and scale databases in the cloud. Choose from seven popular engines — Amazon Aurora with MySQL compatibility, Amazon Aurora with PostgreSQL compatibility, MySQL, MariaDB, PostgreSQL, Oracle, and SQL Server — and deploy on-premises with Amazon RDS on AWS Outposts.",
 "The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array."
 ];
// pick random word from the selected randB
// const randC = ["Third Set of Random to Build From"];
//console.log(randA[getRandom(randA.length)]);
//console.log(getRandElem(randA));
//console.log(getRandom2());
// Start with Random Greeting
console.log(`\nRandom Greeting: ${getRandElem(randA)}\n`);
const quoteIndex=getRandom(randB.length);
const quote=randB[quoteIndex];
//console.log(quoteIndex);
console.log(`Fact or Quote: ${quote}`);
const randWordOfQuote=splitStringGetWord(quote);
console.log(`\nRandom Word from above \"fact or quote\": ${getRandElem(randWordOfQuote)}\n`);
const randomNumber = getRandom2(quoteIndex,quote.length);
console.log(`Random number between ${quoteIndex} and ${quote.length}: ${randomNumber}`);
