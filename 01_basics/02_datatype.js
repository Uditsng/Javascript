"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// let name = "hitesh"
// let age = 18
// let isLoggedIn = false
// let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object


/*Two type of datatypes : primitive and non-primitive*/
//  Primitive(call by value)
//  7 types : String, Number, Boolean, null(empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Non primitive(call by reference)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction()
//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof heros)
console.log(typeof myFunction)