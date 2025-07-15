const villains = ["Dr. Dang","Gabbar Singh","Mogambo"]
const marvelHeros = ["Thar","Iranman","Spiderman"]
// villains.push(marvelHeros);
// console.log(villains);

// const all_heros = villains.concat(marvelHeros)
// console.log(all_heros);


// *********** Specially used this mathod = SpreadMathod ************
// const allheros = [...villains, ...marvelHeros]
// console.log(allheros);

const another_array = [1,2,3,[2,3,4],6,7,8,[1,2,[3,4]]]
// const real_array = another_array.flat(1)
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Aanchal"));
console.log(Array.from("Aanchal"));
console.log(Array.from("12345"));

// console.log(Array.from({name:"Aanchal"})); In this case we get an empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));







