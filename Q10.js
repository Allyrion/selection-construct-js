const prompt = require("prompt-sync")();

const workTime = parseInt(prompt("Please enter the number of hours spent on labour: "));
const costOfParts = parseInt(prompt("Please enter the cost of the parts needed for repair: "));

const labourCost = workTime * 100;
let finalCost = labourCost + costOfParts;

console.log((finalCost > 150) ? `The final cost of repairs was $${finalCost}.` : `The final cost of repairs was $150`);