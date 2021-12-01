const prompt = require("prompt-sync")();

const testOne = parseInt(prompt("Please enter your score on the first test: "));
const testTwo = parseInt(prompt("Please enter your score on the second test: "));
const testThree = parseInt(prompt("Please enter your score on the third test: "));

const avgScore = (testOne + testTwo + testThree) / 3;

if (avgScore >= 50) {
    console.log("You passed! Congratulations")
}
else {
    console.log("Sorry, you failed.")
}