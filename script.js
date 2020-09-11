// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {

    // Create arrays defining numbers, special characters, and letters
    var number = ["0","1","2","3","4","5","6","7","8","9"];
    var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","<",">","/","?","`","~",":",";","'","[","]","{","}","|"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Create function to map letters to uppercase

    var toUpper = function(x) {
        return x.toUpperCase();
    }

    var upper = letters.map(toUpper);
    console.log(upper)

    // Turn the type of the lenght prompt from a string to a number
    var confLength = parseInt(prompt("How many characters would you like your password to be? You can choose between 8 and 128."));
    // Create an if statement that shows alerts if the input is less than 8 or greater than 128, another alert if it is left blank, or continues with prompts if a number between 8 and 128 is input
  while (confLength < 8 || confLength > 128 || !confLength) {
    if (!confLength) {
      alert("You must input a value.")
      confLength = parseInt(prompt("How many characters would you like your password to be? You can choose between 8 and 128."));
  }
  else if (confLength < 8 || confLength > 128) {
      confLength = parseInt(prompt("You did not choose a number between 8 and 128. Please choose a number between 8 and 128."));
  }
}
    var confNumbers = confirm("Would you like your password to have numbers?");
    var confSpecialChar = confirm("Would you like your password to have special characters?");
    var confUpper = confirm("Would you like your password to have uppercase letters?");
    var confLower = confirm("Would you like your passowrd to have lowercase letters?");    

  // Insert "if" condition if all criteria are not chosen and another if statment if all criteria are chosen
  while (!confNumbers && !confSpecialChar && !confUpper && !confLower) {
      alert("You must choose at least one criteria.")
      var confNumbers = confirm("Would you like your password to have numbers?");
      var confSpecialChar = confirm("Would you like your password to have special characters?");
      var confUpper = confirm("Would you like your password to have uppercase letters?");
      var confLower = confirm("Would you like your passowrd to have lowercase letters?"); 
  }

  // Create "if" conditions to concatenate the criteria arrays depending on the boolean output of each prompt
  
  // Define an empty array to store the chosen criteria
  var criteria = [];
 
  if (confNumbers) {
      criteria = criteria.concat(number);
      console.log(criteria);
  }
  if (confSpecialChar) {
      criteria = criteria.concat(specialChar);
  }
  if (confUpper) {
      criteria = criteria.concat(upper);
  }
  if (confLower) {
      criteria = criteria.concat(letters);
  }

  console.log(criteria);

  // Create emtpy string to store each the individual characters as the "for" loop runs
  var result = "";

for (var i=0; i < confLength; i++) {
      result = result + criteria[Math.floor(Math.random()*criteria.length)];
  }
  console.log(result);
  // Have the generatePassword function return the final password string, which will not be equal to the password variable
  return result;
  }

  passwordText.value = password;

  // Add function to copy to clipboard
  function copyFunc() {
    var copy = document.getElementById("password").select();
    document.execCommand("copy");
    alert("Your random password has been copied to your clipboard!");
    }

    copy.addEventListener("click", copyFunc);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);