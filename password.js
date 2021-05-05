const input = require('readline-sync');

//the bricks for the wall
const lineStart = "* ";
const lineEnd = "\n* ";
const characterArrayPlainText = [
    "a","b","c","d","e","f","g","h","i","j",
    "k","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z","2","3",
    "4","5","6","7","8","9","A","B","C","D",
    "E","F","G","H","J","K","L","M","N",
    "P","Q","R","S","T","U","V","W","X",
    "Y","Z","!","@","#","$","%","^","&","*",
    "(",")",
];

//selects a random character
function getRandomChar(max) {
    return (Math.floor(Math.random() * Math.floor(max)));
}

// uses inputs to create the password from array characters
function createNewPassword(value, characterArray) {
    let password = "";
    if (characterArray === 3) {
        for (i = 0; i < value; i++) {
            password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length)];
        }
    } if (characterArray === 2) {
        for (i = 0; i < value; i++) {
            password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length-10)];
        }
    } if (characterArray === 1) {
        for (i = 0; i < value; i++) {
            password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length-36)];
        }
    }
    return password;
}        

// prints instructions and tips at start
function printLengthMessage() {
    console.log(lineEnd + "This CLI program will create a unique, randomized password for your use." + lineEnd);
    console.log(lineStart + "A secure password is at least 12 characters long." + lineEnd);
    console.log(lineStart + "The password will become exponentially more secure as the length increases." + lineEnd);
}

// sets the password length from user input
function getPasswordLength() {

    printLengthMessage();

    let newPasswordLength = input.questionInt(lineStart + "Please input a numeric length for password: ");

    while(newPasswordLength > 999 || newPasswordLength < 12) {
        console.log(lineStart + "Password length unacceptable. Use a value between 12 and 999.");
        newPasswordLength = input.questionInt(lineStart + "Please input a numeric length for password: ");
    }

    return newPasswordLength;
}

// prints message about which characters each type will use
function printTypeMessage() {
    console.log(lineEnd + "Type '1' = Lowercase and numbers." + lineEnd);
    console.log(lineStart + "Type '2' = Uppercase, lowercase, and numbers." + lineEnd);
    console.log(lineStart + "Type '3' = Uppercase, lowercase, numbers, and 10 common unique characters from number bar." + lineEnd);
}

// gets the password type from user for character usage
function getPasswordType() {

    printTypeMessage();

    let newPasswordType = input.questionInt(lineStart + "Please input a numeric type for password: ");

    while(newPasswordType > 3 || newPasswordType < 1) {
        console.log(lineEnd + "Password type unacceptable. Use a value between 1 and 3.");
        newPasswordType = input.questionInt(lineStart + "Please input a numeric type for password: ");
    }

    return newPasswordType;
}

// carries out all logic of the program
function printPassword() {

    let passwordLength = getPasswordLength();
    let passwordType = getPasswordType();
    let newPassword = createNewPassword(passwordLength, passwordType);

    console.log("\n" + newPassword);
}

// calls the program
printPassword();