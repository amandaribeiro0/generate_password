const passwordInput = document.querySelector("#inputPassword");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGenerate = document.querySelector('#btnGenerate');

const inputLower = document.querySelector('#inputLower');
const inputUpper = document.querySelector("#inputUpper");
const inputNumber = document.querySelector("#inputNumber");
const inputSymbols = document.querySelector('#inputSymbols');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols =["!","@","#","$","*",".","?","%"];
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", ()=>{
    infoLength.innerHTML = lenInput.value;
});

btnGenerate.addEventListener("click", ()=>{
    generatePassword(
        inputNumber.checked,
        inputSymbols.checked,
        inputLower.checked,
        inputUpper.checked,
        lenInput.value
    );
});

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    length
) => {
    const newArray = [
        ...(hasNumbers ? numbers:[]),
        ...(hasSymbols ? symbols:[]),
        ...(hasLowercase ? lower:[]),
        ...(hasUppercase ? upper:[]),
    ];

    if (newArray.length === 0)return;

    let password = "";
    for (let i  = 0; i< length; i++){
        const randomIndex = Math.floor(Math.random()* newArray.length);
        password += newArray[randomIndex];
    }

    passwordInput.value = password;
};