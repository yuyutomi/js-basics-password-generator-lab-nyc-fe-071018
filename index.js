// after all html and css have loaded...
window.addEventListener("load", () => {
  let outputResult = document.querySelector("output")
  let lowercharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let uppercharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let number = '0123456789'.split('')
  let specialCharacters = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'.split('')
  
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    let passwordLength = document.getElementById('passwordLength').value
    // this creates an array out of the string
    if(passwordLength < 4) {
      passwordLength = 4
    }
    // better to define (use 'let') outside for loop
    let newPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      if (i < passwordLength) {
        newPassword += lowercharacters[Math.floor(Math.random()* lowercharacters.length)]
        i++
      }
      if (i < passwordLength) {
        newPassword += uppercharacters[Math.floor(Math.random()* uppercharacters.length)]
        i++
      }
      if (i < passwordLength) {
        newPassword += number[Math.floor(Math.random()* number.length)]
        i++
      }
      if (i < passwordLength) {
        newPassword += specialCharacters[Math.floor(Math.random()* specialCharacters.length)]
        i++
      }
    }
   
    console.log(newPassword)  
  })
});
