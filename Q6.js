const prompt = require("prompt-sync")();

const int = parseInt(prompt("Please enter an interger: "));

if (int == 0) {
    console.log(`The number you entered is 0.`)
}
else if ((int % 2) == 0) {
    console.log("The number you entered is an even number.")
}
else (
    console.log("The number you entered is an odd number.")
)