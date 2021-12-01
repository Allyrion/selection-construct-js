const prompt = require("prompt-sync")();

let age = prompt("How old are you? ");

if (isNaN(age) === true) {
    console.log("Sorry, you did not enter a valid number.");
}
else {
    let userAge = parseInt(userAge);
    if (userAge < 0) {
        console.log("Your age cannot be less than zero. Please try again.");
    }
    else if (userAge < 18) {
        console.log("You are too young to go beyond this point");
    }
    else {
        console.log("You have been granted access!");
    }
}