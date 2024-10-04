const names = ['ram','shyam','geeta','seeta','raman','ramm'];
console.log('names:',names)

//forEach: Used to iterate over arrays. It executes a provided function once for each array element
names.forEach(function(value){
    console.log(value);
})

names.forEach(function(value){
    if ( value=='ram'){}
    else{
        console.log(value);
    }
})

//map:The map function is essential when you need to transform data from one array to another while maintaining the same number of elements . For example, if you want to add "Ji" to each name in an array, you can use names.map(name => name + " Ji")
let newArr = names.map(function(value){
    return value +" ji";
})
console.log('newArr: ',newArr)


//filter: Creates a new array with all elements that pass the test implemented by the provided function. For instance, to filter names starting with 'r'
let newArr2 = names.filter(function(value){
   if(value.startsWith("r")){
    return true
   }
})
console.log('newArr2: ',newArr2)
