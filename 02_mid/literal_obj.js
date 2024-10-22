// singleton
//Object.create

// obj literals

const mySmbl = Symbol('key1') //create sym use in obj and take o/p

const jsUser = {
    name: 'udit',
    place: 'Knj',
    age: '20',
    email: 'udit@google.com',
    "nature of person": 'boring person',

    [mySmbl]: "myKey1", // [ ] use to declare sym

}
//console.log(jsUser.name)  //this o/p method has a limitation
//console.log(jsUser["name"])
//console.log(jsUser["nature of person"])

//console.log(jsUser[mySmbl])  // taking o/p of sym doesn't use " "

jsUser.name = "Udit singh"
//console.log(jsUser)

//Object.freeze(jsUser) // lock the obj from accidental changes

jsUser.name = "Udit"
//console.log(jsUser)

jsUser.greeting = function(){
    console.log(`hello JS user, ${this.name}`)
}
jsUser.greeting()