const score = 200
// console.log(score)


const balance = new Number(100000)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1323.64556  /*value 23.22333 = precise value (23.2)
                                        123.634 = precise value (by round off 6 - 124)
                                        1323.64556 = precise value (1.32e+3)  */
// console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));





// *********************** Maths *************************

// console.log(Math);
// console.log(Math.abs(-5))
// console.log(Math.round(5.6));
// console.log(Math.ceil(23.67));
// console.log(Math.floor(23.34));
// console.log(Math.sqrt(25));
// console.log(Math.min(2,5,6,1,8));
// console.log(Math.max(9,4,1,6,5));

console.log(Math.random());  /*value gives in 0-1 range */
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1))+min)




