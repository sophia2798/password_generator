// Assignment Code
var generateBtn = document.querySelector("#generate");
 
    // Create variables to store chosen criteria
    let confNumbers = false;
    let confSpecialChar = false;
    let confUpper = false;
    let confLower = false;

    // Create variables for each switch in the HTML
    var numSwitch = document.querySelector("#num-switch");
    var specSwitch = document.querySelector("#special-switch");
    var upperSwitch = document.querySelector("#upper-switch");
    var lowerSwitch = document.querySelector("#lower-switch");

   function toggle(bool) {
       bool = !bool;
       return bool;
   }

   numSwitch.addEventListener("click", function() {
         confNumbers = toggle(confNumbers)
   })
   specSwitch.addEventListener("click", function() {
   confSpecialChar = toggle(confSpecialChar)    
   })
   upperSwitch.addEventListener("click", function() {
    confUpper = toggle(confUpper)   
   })
   lowerSwitch.addEventListener("click", function() {
   confLower = toggle(confLower)    
   })

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

function generatePassword() {

    // Create a variable for the input for the password length and create conditionals to address the edge conditions
    var length = document.querySelector("#charLength").value
    if (isNaN(length) || !length) {
        alert("You must enter a number!")
    }
    else if (parseInt(length) < 8 || parseInt(length) > 128) {
        alert("You must enter a number between 8 and 128!")
    }
    else {
        var confLength = length;
    }

    // Create arrays defining numbers, special characters, and letters
    var number = ["0","1","2","3","4","5","6","7","8","9"];
    var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","<",">","/","?","`","~",":",";","'","[","]","{","}","|"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Create function to map letters to uppercase

    var toUpper = function(x) {
        return x.toUpperCase();
    }
    var upper = letters.map(toUpper);

      // Create "if" conditions to concatenate the criteria arrays depending on the boolean output of each prompt
  
  // Define an empty array to store the chosen criteria
  var criteria = [];
  // The minimum criteria will create a string of at least one character from each chosen string so the final password is ensured to have at least one of each chosen criteria
  var minimum = "";
 
  if (confNumbers) {
      minimum = minimum.concat(number[Math.floor(Math.random()*number.length)]);
      criteria = criteria.concat(number);
  }
  if (confSpecialChar) {
    minimum = minimum.concat(specialChar[Math.floor(Math.random()*specialChar.length)]);
      criteria = criteria.concat(specialChar);
  }
  if (confUpper) {
    minimum = minimum.concat(upper[Math.floor(Math.random()*upper.length)]);
      criteria = criteria.concat(upper);
  }
  if (confLower) {
    minimum = minimum.concat(letters[Math.floor(Math.random()*letters.length)]);
      criteria = criteria.concat(letters);
  }
  console.log(criteria)
  console.log(minimum);

  // Create emtpy string to store each the individual characters as the "for" loop runs
  var result = "";

for (var i=0; i < (confLength - minimum.length); i++) {
      result = result + criteria[Math.floor(Math.random()*criteria.length)];
  }
  console.log(result);
  // Have the generatePassword function return the final password string, which will not be equal to the password variable
  return result.concat(minimum);

}

  passwordText.value = password;
  if (confNumbers === false && confSpecialChar === false && confUpper === false && confLower === false) {
    passwordText.value = "You must pick at least one topping!";
    }

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