// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
  
// Variables - creating all available characters to select
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!$%#&'(),-*£/:;=<>@[{]}";

  var lwercase = confirm ("Would you like lowercase letters?");
  var upprcase = confirm ("Would you like uppercase letters?");
  var nmbers = confirm ("Would you like any numbers?");
  var spcial = confirm ("Would you like to have any special charatcers?");
  alert ("please select at least one character");

  //setting password length
  var passwordLength = prompt ("How long would you like your password to be, needs to be between 8 and 128 characters?");

  if (passwordLength < 8 ) {
    alert ("This can not be lower than 8")
    return "";
  }
  
  if (passwordLength > 128) {
    alert ("This can not be higher than 128")
    return "";
  }
  
  var passwordCharacters = "";
  
  
  
  //setting character preference
  

  if (upprcase) {
    passwordCharacters += uppercase;
  } 


  

  if (lwercase) {
    passwordCharacters += lowercase;
  }

  
  
  if (nmbers) {
    passwordCharacters += numbers;
  }

  if (spcial) {
    passwordCharacters += special;
  } 
  
  //Creating password variable
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  
  console.log(password);
  return password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
