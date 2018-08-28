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
    
    let password = lowercharacters[Math.floor(Math.random()* lowercharacters.length)] + uppercharacters[Math.floor(Math.random()* uppercharacters.length)] +  number[Math.floor(Math.random()* number.length)] + specialCharacters[Math.floor(Math.random()* specialCharacters.length)]
    console.log(password)  
  })
});
