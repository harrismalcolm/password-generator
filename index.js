const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateEL = document.getElementById("generate-password")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let maxChar = 15;

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

