// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = "";
// Write password to the #password input

// }
function writePassword() {
	var password = "";
	var passwordText = document.querySelector("#password");
	var specialCharacters = "!@#$%^&*()";
	var lcLetters = "abcdefghijklmnopqrstuvwxyz";
	var ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var passwordLength;
	var flag = true;
	var userInput;
	while (flag) {
		passwordLength = Number(prompt("Enter Password Length Between 8-128 characters"));
		if (passwordLength <= 128 && passwordLength >= 8) {
			flag = false;
		}
	}

	flag = true;
	while (flag) {
		userInput= prompt("Do you want special characters (Y/N)").toLowerCase();
		if (userInput == "y") {
			lcLetters = lcLetters + specialCharacters;
			flag= false;
		}
		else if (userInput == "n") {
			flag = false;
		}

	}
	flag = true;
	while (flag) {
		userInput = prompt("Do you want numbers (Y/N)").toLowerCase();
		if (userInput == "y") {
			lcLetters = lcLetters + numbers;
			flag = false;
		}
		else if (userInput == "n") {
			flag = false;
		}

	}
	flag = true;
	while (flag) {
		userInput = prompt("Do you want Capitals (Y/N)").toLowerCase();
		if (userInput == "y") {
			lcLetters = lcLetters + ucLetters;
			flag = false;
			
		}
		else if (userInput == "n") {
			flag = false;
		}
	
	}
	for (var i = 0; i < passwordLength; i++) {
		var randomNumber = Math.floor(Math.random() * lcLetters.length);
		password += lcLetters.substring(randomNumber, randomNumber + 1);
	}
	passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);