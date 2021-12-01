const prompt = require("prompt-sync")();

const workTime = parseInt(prompt("Please enter the number of hours spent on labour: "));
const costOfParts = parseInt(prompt("Please enter the cost of the parts needed for repair: "));

const labourCost = workTime * 100;
const finalCost = labourCost + costOfParts;

if (finalCost > 150) {
    console.log(`The final cost of repairs was $${finalCost}.`)
}
else if (finalCost < 150) {
    console.log(`The final cost of repairs was $150`)
}