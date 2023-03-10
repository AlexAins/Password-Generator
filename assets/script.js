// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to ask which character options they want. Forcing at least one option.
function charactersSelection(){
  alert("Please select what type of Characters you would like to possibly include in your Password!\n(Select at least one type)");

  let includeLower1 = confirm("Would you like to include Lowercase Characters in your Password?");
  let includeUpper1 = confirm("Would you like to include Uppercase Characters in your Password?");
  let includeNumber1 = confirm("Would you like to include Numerical Characters in your Password?");
  let includeSpecial1 = confirm("Would you like to include Special Characters in your Password?");

  if (includeLower1+includeUpper1+includeSpecial1+includeNumber1 === 0){
    alert("You need to select at least one type of Characters !");
    charactersSelection();
  }
  else{
    includeLower = includeLower1;
    includeUpper = includeUpper1;
    includeNumber = includeNumber1;
    includeSpecial = includeSpecial1;
    return;
  }
}

// Function to create list of possible characters from chosen character options.
function listCharacters(){
  let startingList = [];

  if (includeLower === true){
    startingList = startingList.concat(lowerCasedCharacters);
  }
  if (includeUpper === true){
    startingList = startingList.concat(upperCasedCharacters);
  }
  if (includeNumber === true){
    startingList = startingList.concat(numericCharacters);
  }
  if (includeSpecial === true){
    startingList = startingList.concat(specialCharacters);
  }
  
  finalCharacters = startingList;
}

// Function to get length of password. Forcing a number between 10 and 64.
function getLength(){
  var length1 = prompt("How long would you like your Password? \n(Between 10 and 64 characters!)");

  if (length1 < 10){
    alert("Your Password is too short! \nPlease enter a number between 10 and 64!");
    getLength();
  }
  else if(length1 > 64){
    alert("Your Password is too long! \nPlease enter a number between 10 and 64!");
    getLength();
  }
  else{
    passwordLength = length1;
    return;
  }
}

// Function to generate a random set of number between a set length.
function randomArray(){
  let randomNumbers1 = [];

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * ( finalCharacters.length - 1 + 1)) + 1;
    randomNumbers1.push(randomNumber);
  }

  randomNumbers = randomNumbers1;
}

// Function to create new array of Password characters and make into a single string
function passwordArray(){
  let passArray = [];

  for (let i=0; i<passwordLength; i++){
    let passElement = finalCharacters[randomNumbers[i] - 1];
    passArray.push(passElement);
  }

  finalPassword = passArray.join('');

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  charactersSelection();
  listCharacters();
  getLength();
  randomArray();
  passwordArray();

  var finalPassword = passwordArray();
  var passwordText = document.querySelector('#password');

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
