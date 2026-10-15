const prompt = require("prompt-sync")();

let userPrompt = Number(prompt("Table of:"));



while (true) {

	if (!isNaN(userPrompt)) {
	
		for (let index = 1; index <= 12; index++) {

			let multiplication = userPrompt * index;
			console.log(`${userPrompt} X ${index} = ${multiplication}` );

		}
		
		break;
	}
	
	else {
			console.log("Not a Number")
			userPrompt = Number(prompt("Table of:"));
	}

}



