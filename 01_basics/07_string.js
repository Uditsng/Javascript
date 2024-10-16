// const name = "Udit"
// const repoCount = 5

// console.log("my name is "+name +" and my repoCount is " +repoCount) //beginner level
// console.log(`My name is ${name.toUpperCase()} and My repoCount is ${repoCount}`) //industry level

// const userName = new String("Udit singh")
// console.log(userName)
// /* Methods of string */
// console.log(userName.toLowerCase())
// console.log(userName.length)
// console.log(userName.indexOf("i"))
// console.log(userName.charAt(5))

const url = "https://udit.com/udit%20singh" /* Browser didn't understand space. So, it replace 'space' with '%20', but for looks we don't want '%20', so we replace it with oher symbol */
console.log(url.replace('%20','-')) 
console.log(url.includes("singh"))
console.log(url.includes("katiyar"))