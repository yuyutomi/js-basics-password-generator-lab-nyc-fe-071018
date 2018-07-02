const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_{|}~".split("");
const allCharacters = lowercaseLetters
  .concat(uppercaseLetters)
  .concat(numbers)
  .concat(specialCharacters);

window.addEventListener("load", () => {

  document.addEventListener('submit', handleSubmit)
});

function handleSubmit(e) {
  e.preventDefault();
  let passwordLength = parseInt(
    document.querySelector("#passwordLength").value
  );

  if (passwordLength < 4 || !passwordLength ) passwordLength = 4;



  passwordLength
    ? appendOutput(generatePassword(passwordLength))
    : appendOutput("Please enter a valid password length");
}

function generatePassword(length) {
  let password = "";
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (password.length < length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return password;
}

function appendOutput(password) {
  document.querySelector("output").innerText = password;
}
