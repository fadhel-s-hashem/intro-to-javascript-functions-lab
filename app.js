
// const maxOfTwoNumbers = (x, y) => {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
function isAdult(Age) {
     if(Age >=18) {
        return "Adult";
} else { 
    return "Minor";
}
}
console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(16)); I make it to check 🫤
console.log('Exercise 2 Result:', isAdult('k')); same 🫤
*/

/*
function isCharAVowel (char ) {
    if( char ==='a' || char ==='e' || char === 'i' || char === 'o'|| char === 'u' )
    {return "true";
    } else { return "false";

    }
}

 console.log('Exercise 3 Result:', isCharAVowel("a"));
*/

/*
function generateEmail(name, domain) {
    
    return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com")); 
*/

// return  name +'@'+ domain I trie this in Exercise 4 but didnt work ?

/*
function greetUser (name, day) {
    if (day === 'morning' || day === 'afternoon' || day ==='evening'){
        return `Good ${day}, ${name}!`;

    }  
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
*/

/*
 function maxOfThree(x, y, z) { 
    if (x >= y && x >=z){
        return x;
    }else if (z >= y && z>=x) {
        return z;
    } else{ 
        return y;}

 }
 console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
 */

 /*function calculateTip(bill , tip) {
  let total = bill* (tip/100);
  return total;
 }
 console.log('Exercise 7 Result:', calculateTip(50, 20))
 */

 /*
 function convertTemperature(temp , scale) { 
    if(scale === "C"){ 
        let tempC = (temp * 9/5) + 32;
        return tempC;
    } else if (scale === "F") { 
        let tempF = (temp - 32) * 5/9;
        return tempF;
    } 

 }
 console.log('Exercise 8 Result:', convertTemperature(32, "c"));
 */

 function basicCalculator(x, y, operation ) {
    if (operation === 'add') {
        return x + y;
    } else if (operation === "subtract") {
        return x - y;
    } else if (operation === "multiply") {
        return x * y;
    } else if (operation === "divide") {
        return x / y;   
 }
}
 console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));