// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Create arrays defining numbers, special characters, and letters
  var number = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","<",">","/","?","`","~",":",";","'","[","]","{","}","|"];
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Create a variable to store the chosen criteria
  var criteria;

// Create function to map letters to uppercase

    var toUpper = function(x) {
        return x.toUpperCase();
     }
  
  var upper = alpha.map(toUpper);

// Turn the type of the lenght prompt from a string to a number
  var confLength = parseInt(prompt("How many characters would you like your password to be? You can choose between 8 and 128."));
// Create an if statement that shows alerts if the input is less than 8 or greater than 128, another alert if it is left blank, or continues with prompts if a number between 8 and 128 is input
  if (confLength==="") {
      alert("You must input a value.")
  }
  else if (confLength < 8 || confLength > 128) {
      alert("You must choose a number between 8 and 128.");
      parseInt(prompt("How many characters would you like your password to be? You can choose between 8 and 128."));
  }
  else {
    var confNumbers = confirm("Would you like your password to have numbers?");
    var confSpecialChar = confirm("Would you like your password to have special characters?");
    var confUpper = confirm("Would you like your password to have uppercase letters?");
    var confLower = confirm("Would you like your passowrd to have lowercase letters?");    
  };

  // Insert if statement if all criteria are not accepted and another if statment if all criteria are accepted
  if (!confNumbers && !confSpecialChar && !confUpper && !confLength) {
      alert("You must choose at least one criteria.")
  }
  else if (confNumbers && confSpecialChar && confUpper && confLength) {

  }

  passwordText.value = password;
  document.getElementById("password").placeholder = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
