console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
	return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
	return "Hello " + name + "!";
}
// Remember to call the function to test
console.log(helloName("Everyone"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
	// return firstNumber + secondNumber;
	return firstNumber + secondNumber;
}
console.log(addNumbers(4, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
	return num1 * num2 * num3;
}
console.log(multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
	if (number > 0) {
		return true;
	}
	return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
	if (array === []) {
		return undefined;
	}
	return array[array.length - 1];
}
let testArray = ["thing1", "thing2", "LastThing"];
console.log(getLast(testArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
	for (let item of array) {
		if (item === value) {
			return true;
		}
	}
	return false;
}
console.log(find("thing1", testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
	return letter === string[0];
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
	let sum = 0;
	// TODO: loop to add items
	for (let item of array) {
		sum += item;
	}
	return sum;
}
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumAll(numberArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
	let positiveIntegers = [];
	array.map((e) => {
		if (e > 0) {
			positiveIntegers.push(e);
		}
	});
	return positiveIntegers;
}
let newNumberArray = Array(9) // Creates new array with 9 empty spots
	.fill(0) // Fills each of those 9 spots with a 0
	.map((e) => {
		// Adds a random number between -10 and 9 to every item in the array
		e + Math.floor(Math.random() * 20) - 10;
	});
console.log(newNumberArray);
console.log(allPositive(newNumberArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// This is an challenge from https://edabit.com/challenge/MCK2Rqzn78pMksvsK:
// Create a function that takes in a nested array and an element and returns the frequency of that element by nested level.
// below is the example that was given:
//
// freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
// ➞ [[0, 1], [1, 2], [2, 3]]
// // The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.
// 
// freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
// ➞ [[0, 3], [1, 4], [2, 0]]
// 
// freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
// ➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]

// Below is all my code:

function freqCount(array, element) {
    let level = 0;
    let output = {};
    let data = []
    let count = 0;

    array.map(item => {
        if (item === element) {
            count++
        }
        else if (typeof item === Array) {
            checkInnerArray(item, element, level + 1)
        }
    })

    return output;
}

function checkInnerArray(array, element, level) {

}

console.log(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)) // should output [[0, 1], [1, 2], [2, 3]]
