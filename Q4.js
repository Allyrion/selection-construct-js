const prompt = require("prompt-sync")();

const firstNumber = parseInt(prompt("Please enter a number: "));
const secondNumber = parseInt(prompt("Please enter a second number: "));

if (secondNumber == 0) {
    console.log("The second number cannot be 0. Please try again.")
}
else {
    const quotient = firstNumber / secondNumber;
    console.log(`The quotient of the two numbers is ${quotient}.`)
}