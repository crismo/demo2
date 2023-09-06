const MIN = 0;
const MAX = 100;

let guess = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let message = 'Guess a number between ' + MIN + ' and ' + MAX;


console.log("Guess my number");
console.log(`It is between ${MIN} and ${MAX}`);

// Read line
