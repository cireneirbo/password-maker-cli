const input = require('readline-sync');

//the bricks for the wall
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
    
function createNewPassword(value, characterArray) {
    let password = "";
    if (characterArray === '3') {
        for (i = 0; i < value; i++) {
            password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length)];
        }
    } if (characterArray === '2') {
        for (i = 0; i < value; i++) {
            password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length-10)];
        }
    } if (characterArray === '1') {
        for (i = 0; i < value; i++) {
            password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length-36)];
        }
    }
    return password;
}        
/*
//respond to make new-password user request
const buttonElement = document.getElementById('make-password');
buttonElement.addEventListener("click", function() {

    const lengthPasswordElement = document.getElementById('length-password');
    const selectTypePasswordElement = document.querySelector('input[name="engine"]:checked');

    let newPassword = createNewPassword(lengthPasswordElement.value, selectTypePasswordElement.value);

    const newPasswordElement = document.getElementById('new-password');
    newPasswordElement.innerHTML += `
        <p>${newPassword}</p>
        <hr>
    `;
});
*/
function printThreeDotsCLI() {
    for(let i = 0; i < 3; i++){
        console.log(">");
    }
}

function printInfoMessage() {
    const lineStart = "> ";

    console.log(lineStart + "This CLI program will create a unique, randomized password for your use. \n" + lineStart);
    console.log(lineStart + "A secure password is at least 12 characters long.\n" + lineStart);
    console.log(lineStart + "The password will become exponentially more secure as the length increases.\n" + lineStart);
}

printInfoMessage();

function getPasswordLength() {

    let newPasswordLength = input.questionInt("> Please input a numeric length for password: ");

    while(newPasswordLength > 999 || newPasswordLength < 12) {
        console.log("> \n> Password length unacceptable. Use a value between 12 and 999.\n");
        newPasswordLength = input.questionInt("> Please input a numeric length for password: ");
    }


    return newPasswordLength;
}

let num = getPasswordLength();
console.log(num);
