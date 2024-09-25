const userId = 101  // they cannot be changed once declared
let userEmail = "udit@google.com" // used as variable to store value
var userPass = "0000" /* prefer not to use var coz of issue in block scope */
userCity = "kannauj" // it worked to declare variable but it is not a good practice
let userState

// modification in above 
userEmail = "udityrr@google.com"
userPass = "8888"
userCity = "Noida"

console.table([userEmail, userPass, userCity, userState])