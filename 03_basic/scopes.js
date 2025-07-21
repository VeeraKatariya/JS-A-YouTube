// var c = 300
let a = 56

if (true){
let a= 10
let b = 29
// var c = 45
// console.log("INNER: ",a);

}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);



// ******************* Nested scope ****************************

function one(){
    const username = "Aanchal"
    function two(){
        const website = "Youtube"
    //     console.log(username);
    //     console.log(website);

    }
    // console.log(website); its not execute

    two()
}
one()


if(true){
    const username = "Aanchal"
    if(username==="Aanchal"){
     const website = " youtube"
    //  console.log(username+website);
    
    //  console.log("INNER: ",website);
    }
// console.log(website); ITS NOT EXECUTE

}
// console.log(username);



// *********************** Interesting ****************
// console.log(addone(4));

function addone(num){
    return num +1

}

const addtwo = function(num){
    return num +2
}

addtwo(5)



let person = {
  name: "Rahul",
  speak: function() {
    console.log("Hello, I am " + this.name);
  }
};

person.speak(); // Output: Hello, I am Rahul



let mobile = {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 69999,
  is5G: true,
  features: ["Camera", "Bluetooth", "WiFi", "Fast Charging"],

  // Method (function inside object)
  call: function(number) {
    console.log("Calling to " + number + "...");
  },

  // Arrow function method
  getDetails: function() {
    return `${this.brand} ${this.model} - ₹${this.price}`;
  }
};
console.log(mobile.brand);         // Output: Samsung
console.log(mobile.features[0]);   // Output: Camera
mobile.call("9876543210");         // Output: Calling to 9876543210...
console.log(mobile.getDetails());  // Output: Samsung Galaxy S24 - ₹69999
