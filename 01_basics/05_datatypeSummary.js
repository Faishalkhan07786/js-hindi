// Datatypes

// Primitive

// 7types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = true;
const insideTemp = null;
let userEmail;

console.log(typeof userEmail);

const id = Symbol("123")
const anotherId = Symbol("123");
const bigNumber = 34253658608473626n

// Reference (Non Primitive)

// Array, Object, Functions

const superHeros = ["superman", "spiderman", "ironman"];
let student = {
    name: "faishal khan",
    rollNo: 100,
};

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof bigNumber);


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory (Stack and Heap)

// Stack(Primitive), Heap(NonPrimitive)


// Stack
let myYoutubename = "faishalkhan";

let anotherName = myYoutubename;
anotherName = "careless";

console.log(anotherName);
console.log(myYoutubename);


// Heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "faisal@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);




