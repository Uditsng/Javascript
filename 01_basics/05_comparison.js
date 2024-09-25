//comparison b/w same datatype is good 
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// but comparison in different dt is not a good practice
console.log("2" > 1);
console.log("02" > 1);

//this is not preferred to use, it can give unwanted O/P
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 'strictly checking datatype' 
console.log("2" === 2);