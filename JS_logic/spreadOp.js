/* Spread Operator (...): 
    use Cases:
    Creating copies of arrays,obj.
    Merging arrays.
    Passing multiple arguments to a function */

let arr1 = [1,3,4,6,7,9]
console.log(arr1)
let arr2 = [...arr1]
arr2.pop()
console.log(arr2,arr1)

let names = ['ram','shyam']
let lastnames = ['katiyar']
let fullname = [...names,...lastnames]
console.log(fullname)
