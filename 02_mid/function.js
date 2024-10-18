
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

                                /* UserName login */

function loginUserMessage1(username){
return `${username} just logged in`
}
//console.log(loginUserMessage1("udit"))

function loginUserMessage2(username){
    if(username = "undefined"){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage2())

function loginUserMessage3(username='samasya'){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage3())


                            /* calculateCartPrice */
function calculateCartPrice1(...num1){
    return num1
}
//console.log(calculateCartPrice1(200, 400, 500, 2000))

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice2(200, 400, 500, 2000))



                 /* obj in func */

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));