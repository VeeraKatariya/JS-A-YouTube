
// ************************** Primitive DataTYpe (Call by value)***********************
/*
STRING, NUMBER, BOOLEAN, NULL, BIGINT, UNDEFINED, SYMBOL
 */

const score = 100
const scorevalue = 100.3
const isloggedIn = false 
const outsideTemp = null
let username;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid);





// ************************* Non Primitive Datatype (Reference Data Type) *************************
/*
ARRAY, OBJECT, FUNCTION  (return object datatype)
 */


const villains =["Master Gogo","Gabbar","Mogambo"] /*This is an array */

let myObj = {      /*This is an Object  */
name : "Aanchal",
age:22,
}


const myFunction = function(){   /*This is a Function */
console.log("Hello World");

}



// console.log(typeof myObj);
// console.log(typeof villains);

// console.log(typeof outsideTemp );
// console.log(typeof  myFunction);
console.log(typeof scorevalue);
console.log(typeof anotherid);



