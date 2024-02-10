Week-Generate-password

Week 3 we have been tasked to code a random password generator.

I have successfully created this code to genereate a random passowrd based on the users requirements.

I have created variable for all available characters for the user to choose from.

Preference layout has been created to prompt user to select a password length and confirm what characters they would like in their passwords.

Alerts have been added to ensure customer chooses from the requirements of the code. 

`If` statements have been used to confirm selected answers for the password.

Once the user has selected preferred characters available the code will then genrerate a random passowrd for the user.

I have tested the code on google and successfully generated a random passowrd when going the preferences.

I had originally struggled to get this code working due to a small Tying error but once this had been rectified the password generator work as required. 

"error in code that was found - previous code displayed;
for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(math.random() * passwordCharacters.length));
  }

  - which made the webpage not display code after selecting the password preferences. 

  This took a while to locate the error.

  Amended code used to debug - New code displayed;
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  This has now resolved the issues and password will now generate after selected preferences.

  All other code had now issues once written out. 

  link in repository to show webpage to password generator



