/* Stack (primitive data types) uses call by value */

let username = "uditsingh"
let username2 = username
console.log(username)
username2 = "udit"  //change made in one doesn't affect the other/ main variable
console.log(username2)

/* Heap (Non-primitive data type) uses call by reference */

let userID ={
    email : "udit@gmail.com",
    pass : "123321"
}

let userID2 = userID
userID2.email = "udityrr@gmail.com" //change made in one affect the other/main variable

console.log(userID)
console.log(userID2)