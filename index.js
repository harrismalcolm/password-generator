const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateEL = document.getElementById("generate-password")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLength = document.getElementById("password-length")
let passwordCopyOne = document.getElementById("password-one-copied")
let passwordCopyTwo = document.getElementById("password-two-copied")
let maxChar = passwordLength.value;

// Update maxChar varible with updated input field number
function passwordInput () {
    if(isNaN(passwordLength.value)) {
        alert("Please type a number in the input field")
        passwordLength.value = ""
    } else {
        maxChar = passwordLength.value
    }
}

// Generate a random number between 0 and the length of the character array
function getRandomChar() {
    return Math.floor(Math.random() * characters.length);
}

// Generate generate a random password
function generatePassword() {
   renderPassword()
}

// Render two random passwords, looping through the character array
function renderPassword() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""

    for(let i = 0; i < maxChar; i++) {
        passwordOne.textContent += characters[getRandomChar()]
        passwordTwo.textContent += characters[getRandomChar()]
    }
}

// Save Passwords to Clipboard
function savePasswordOne() {
    navigator.clipboard.writeText(passwordOne.textContent)

    passwordCopyOne.textContent = "Password Copied: " + passwordOne.textContent
}

function savePasswordTwo() {
    navigator.clipboard.writeText(passwordTwo.textContent)

    passwordCopyTwo.textContent = "Password Copied: " + passwordTwo.textContent
}
