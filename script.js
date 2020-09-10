// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var length = prompt("How many characters would you like your password to be? You can choose between 8 and 128.");
  var numbers = prompt("Would you like your password to have numbers?");
  var specialChar = prompt("Would you like your password to have special characters?");
  var upper = prompt("Would you like your password to have uppercase letters?");
  var lower = prompt("Would you like your passowrd to have loewrcase letters?");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
