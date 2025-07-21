
function myName() {
console.log("A");
console.log("A");
console.log("N");
console.log("C");
console.log("H");
console.log("A");
console.log("L");
}
// myName() Reference= myName, execute = ()

function addTwoNumber (number1, number2){
    console.log(number1 + number2);
    
}
// addTwoNumber(4,"5") Argument = (4,5)  // Parameter = (number1,number2)
// addTwoNumber(4,"a")
// addTwoNumber(3, null)

function addTwoNumber (number1, number2){
//    let result = number1+number2
//    return result
//    console.log("aanchal");   not allow
   
    return number1+number2
}

const result = addTwoNumber(3,5)
// console.log("result:", result);


// Rest operator ... / Spread operator ...
function calculateCartPrice(...num1){
    return num1
}
// (val1 , val2) first two value contains
function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400));


const users = {
    username: "Aanchal",
    price: 199
}
// const users = {
//     username: "Aanchal",
//     prices: 199 ************** These are different **********
// }
function handleObject(anyobject){
    console.log(`Usernamei is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(users)
// pass direct object 
handleObject({
    username:"ritika",
    price:299,
})


const mynewarray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,300,400,500]));

