// TODO: 
// prompt the user for password length
// prompt user for different character options:
// - lowercase letters
// - uppercase letters
// - numbers
// - special
// loop over array [passwordLength value] amount of times
// check and validate that at least character type is selected
// generate random password based on user input
// alert user with generated password

// Variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'",]

function inputOutcome() {
  // Prompts
  var passwordlength = prompt("Please enter a number between 8 and 128.")

  var checklowercase = confirm("Will your password contain lowercase letters?")

  var checkuppercase = confirm("Will your password contain uppercase letters?")

  var checknumber = confirm("Will your password contain numbers?")

  var checkspecial = confirm("Will your password contain special characters?")

  // create master array of all characters; based on true/false for each var

  var userInput = {
    length: passwordlength,
    hasLowercase: checklowercase,
    hasUppercase: checkuppercase,
    hasNumber: checknumber,
    hasSpecial: checkspecial
  };
  return userInput;
};

function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}

function writePassword() {
  
  var options = inputOutcome();
  console.log(options);
  var masterArray = [];
    if (options.hasLowercase === true) {
      masterArray = masterArray.concat(lowercase);
    }
    if (options.hasUppercase === true) {
      masterArray = masterArray.concat(uppercase);
    }
    if (options.hasNumber === true) {
      masterArray = masterArray.concat(number);
    }
    if (options.hasSpecial === true) {
      masterArray = masterArray.concat(special);
    }
    console.log(masterArray);
  var generatedPassword = [];
    for (let index = 0; index < options.length; index++) {
      var passwordResult = getRandom(masterArray);
        generatedPassword.push(passwordResult);
    }
    console.log(generatedPassword);
  
  var password = generatedPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
generateBtn.addEventListener("click", writePassword);
