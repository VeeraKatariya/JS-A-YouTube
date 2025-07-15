//  Singleton = Create by constructor 
// object.create

// Object literals

const mysym = Symbol("key1")


const jsUser = {
    name: "Aanchal",
    "fullname": "Aanchal Katariya",
    [mysym]: "mykey1",
    age: 22,
    location: "Shamli",
    email: "aanbchd@gmail.com",
    islogged: false,
    lastlogginDays: ["monday", "Saturday"]
}

// console.log(jsUser.email);

// this is the better way 
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mysym]);
// console.log(typeof [mysym]);

// jsUser.email = "shghsfd@gmail.com"
// object.freeze(jsUser)
// jsUser.email = "frfghtgujuy@gmail.com"
// console.log(jsUser);


// Using greetings in JavaScript, especially dynamic or personalized greetings, serves several purposes related to user experience and application functionality:
// jsUser.greeting = function () {
//     console.log("Hello JS User")
// }

// jsUser.greetingtwo = function () {
//     console.log(`hello js user, ${this.name}`)
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());




// ******************* Objects Constructor **************

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "12123"
tinderUser.name = "Veera"
tinderUser.isloggedin = false 
// console.log(tinderUser);

const regularUser = {
    email: "sime@gmail.com",
    Fullname: {
        userFullName:{
            firstname:"Veera",
            lastname: "Katariya"
        }
    }
}

// console.log(regularUser.Fullname.userFullName.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users =[
    {
        id:1,
        email:"hjhg@gmail.com",

    },
     {
        id:2,
        email:"hjdrhg@gmail.com",
        
    },
     {
        id:3,
        email:"hjhwrthg@gmail.com",
        
    }
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedin'));
// console.log(tinderUser.hasOwnProperty('islogged'));

// ****************** Object Destructuring ****************

const course = {
    course: "JS Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor : instructor} = course
// courseinstructor ko change kerke uska naam instructor

// console.log(courseInstructor);
console.log(instructor);



// ******************** API/JSON ************************
// {
//     "name": "Aanchal",
//     "rollno":12123,

// }





