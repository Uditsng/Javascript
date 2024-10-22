/* singleton obj */
// const user = new Object()
const user = {}
user.name = 'udit'
user.id = 123
user.email = "...@gmail.com"

//console.log(user)

/* obj combine */
const obj1 = {1:'a', 2:'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {...obj1, ...obj2}

console.log(obj3)
