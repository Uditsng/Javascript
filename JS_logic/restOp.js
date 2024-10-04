/* rest op (...) : The rest operator gathers remaining arguments passed to a function into an array. */

function abcd(a,c,d,...rest){
    console.log(a,c,d,rest)
} 
abcd(1,2,3,34,5)