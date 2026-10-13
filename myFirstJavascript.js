const prompt = require("prompt-sync")({});
let middleName = prompt("What is your Middle name: ");

let name = "Balogun Iyinoluwa";
let age = 24;
let complexion = "Dark Complexion";
let school = "University of Lagos";
let hobby = "Hanging out with friends and seeing movies";


console.log(name);
console.log(middleName);
console.log(age);

if (age >= 18) {
	console.log("You are an Adult");
} 
else {
	console.log("You are a Child");
}

console.log(complexion);
console.log(school);
console.log(hobby);

