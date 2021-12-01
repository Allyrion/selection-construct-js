const prompt = require("prompt-sync")();

let userAge = prompt("How old are you? ");

if (isNaN(userAge) === true) {
    console.log("Sorry, you did not enter a valid number.");
}
else {
    let age = parseInt(userAge);
    if (age < 0) {
        console.log("Your age cannot be less than zero. Please try again.");
    }
    else {
       console.log((age < 18) ? "You are too young to go beyond this point" : "You have been granted access!")
    }
}