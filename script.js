// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
  

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!$%#&'(),-*£/:;=<>@[{]}";


  //setting password length
  var passwordLength = prompt ("How long would you like your password to be?")

  if (passwordLength < 9 ) {
    alert ("This can not be lower than 9")
    return
  }
  
  if (passwordLength > 60) {
    alert ("This can not be higher than 60")
    return
  }
  
  var passwordCharacters = "";
  
  //setting uppercase preference
  var uppercase = confirm ("Would you like have uppercase letters?")

  if (uppercase) {
    passwordCharacters += uppercase;
  } 


  var lowercase = confirm ("Would you like to have lowercase letters?")

  if (lowercase) {
    passwordCharacters += lowercase;
  }

  var numbers = confirm ("Would you like to have any numbers?")
  
  if (numbers) {
    passwordCharacters += numbers;
  }

  var special = confirm ("Would you like to have any special charatcers?")

  if (special) {
    passwordCharacters += special;
  } 
  
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(math.random() * passwordCharacters.length));
  }
  
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
