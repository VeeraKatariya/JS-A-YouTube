let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);
  
// let myCreatedDate = new Date(2025, 0, 14)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2025,0, 14, 8, 9)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("07-14-2025")
// console.log(myCreatedDate.toLocaleString());



// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekend: "long",
})







