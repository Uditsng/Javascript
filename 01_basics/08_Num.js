const score = 400
console.log(typeof score)

const score2 = new Number(200)
console.log(score2)
console.log(typeof score2)

console.log(score.toString())
console.log(score.toFixed(2)) //add decimal and zero, industry level work

const balance = 234.5945
console.log(balance.toPrecision(4))

const Rupee = 13400000
console.log(Rupee.toLocaleString('en-IN')) // make reading easy