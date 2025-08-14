// for...of

const arr = [1,2,3,4,5,6,7]
for (const element of arr) {
    // console.log(element);
    
}
const greetings = "Hello world!"
 
for (const greet of greetings) {

    if (greet == " ") {
        // console.log(`deleted the space`);
        continue   
    }
    // console.log(`Each Char is ${greet}`);
    
}


// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}



// for...in

const myObj = {
    js:'javascript',
    html:'hypertext markup language',
    css:'Cascading Style Sheets',
    py:'python'
}
for (const key in myObj) {
   console.log(`${key} :- ${myObj[key]}`);
   
}