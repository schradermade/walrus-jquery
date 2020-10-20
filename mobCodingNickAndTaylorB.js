// Day 1 of Week 2 (Monday, October 19, 2020) NOTES

/*
As part of practice, we built in JSFiddle a few function declarations in response to the following prompts:

Lesson title:
Introduction to Programming / JavaScript and jQuery / Practice: Writing Functions

Code
Writing Custom Functions
Write custom function for each of the following prompts. Then, call the function providing the necessary parameters to see if your function successfully returns the correct value. And don't forget to parse integers when necessary!

Take somebody's name and say a greeting to them;
Write a function to subtract two numbers;
Now one to multiply two numbers. Then create a new function called threeTimes to multiply three numbers together.
Now write one to divide two numbers. Then write a new function called remainder to find the remainder of two numbers.
Prompt the user to enter their age, another prompt to enter their name and another prompt to enter their favorite food. Pass these as arguments to a function that returns a sentence combining all of this information. Then display the returned string with an alert.

*/

// There were three or four earlier bits of code that we wrote before Taylor and Nick collaborated to write the sentence f(x) below:

function sentence() {
	return("Hello, " + name + ". " + "You say you are " + age + " years old? " + "I can see why you like " + food + " so much!");
}

const age = prompt("How old are you?");

const name = prompt("What is your name?");

const food = prompt("What is your favorite food?");

alert(sentence(name, age, food));


//BUSINES LOGIC VERSUS USER INTERFACE : CALCULATOR FROM SCRATCH

// write a f(x) that converts Fahrenheit to Celsius
function convertFtoC(fahrT) {
  // Subtract 32 from the Fahrenheit temperature.
  let output = fahrT - 32; // 59
  
  output /= 1.8; // 295 / 9  --> 32.777777777777778
  
  // return the converted number
  return output;
}

function convertCtoF(celsT) {
	let output = celsT * 1.8;
  output += 32;
  return output;
  // (0°C × 9/5) + 32 = 32°F
}
// console.log(convertFtoC(91));

console.log(convertCtoF(15));