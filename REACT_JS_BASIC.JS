console.clear();

// ------------------------------ RECT JS BASICS--------------------------------

// ------------------------------------1.variables-----------------------------------------------

// ------- string , number , boolean , null , undefined , bigint , symbol - assign and resign variables

let username = "kelvin";
username = "ben10";
console.log(username);

let age = 32;
age = 65;
console.log(age);

let alive = false;
alive = true;
console.log(alive);

let details = null;
console.log(details);

let friends;
console.log(friends);

let number = BigInt(1249478390008284732);
console.log(number);

let code = Symbol("yt");
console.log(code);

// -----------------------array - print , change , accesing the element------------------------------

let arr = ["akil", 12, true, undefined, null];
console.log(arr);
arr = ["penkuvin", "triger", "lion", "parrot"];
console.log(arr);
arr[0] = "monkey";
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

// ----------------------------- object => print , change , accesing the property---------------------------------------------

let user = {
  name: "hari",
  age: 54,
  alive: true,
};

console.log(user);
user.name = "tamilzh";
console.log(user);
console.log(user.alive);

// ------------------------------ compare var , let and const

// ----- var - redeclaration , reasign

var a = 10;

//  redeclaration

var a = 20;

//  reasign
a = 30;

console.log(`a is : ${a}`);

// ------------- let - can't redclaration , reasign

let b = 10;

//  can't redeclaration so commented
// let b = 20;

// reasign

b = 20;

console.log(`b is : ${b}`);

// -------- const - can't redclaration , can't reasign becasue it's constant

const c = 300;

// can't redeclaration so commented
// const c = 400;

// can't reasign so commented
// c = 500;

console.log(`c is : ${c}`);

// ------------------------------- local variable and globel variable--------

// local variable

{
  //------- can't access out side the x variable
  let x = 200;
  console.log(`local variable : ${x}`);
}
// try it
// console.log(x);

// globale variable

let y = 111;

{
  // it access the any function and class and any part of the document
  console.log(`global variable : ${y}`);
}

// ---------------------------------------------- 2.Arrow function----------------------------------

const printName = (name) => {
  console.log(`fullname : ${name}`);
};

// call the function

printName("Arun");

// ----------------------------------------------- 3.array method----------------------------------

// length
let furits = ["apple", "cova", "graps", "pinapple", "jackfurits"];
console.log(furits.length);

// tosting()
console.log(furits.toString());

// pop() -- delete the last element  'jackfurits'
furits.pop();
console.log(furits);

// push() -- add the last element 'watermelon'
furits.push("watermelon");
console.log(furits);

// shift() -- delete the first element 'apple'
furits.shift();
console.log(furits);

//  unshift() -- add the first element  'banana'
furits.unshift("banana");
console.log(furits);

// join() -- join the elements with '/'
let outjoin = furits.join("/");
console.log(outjoin);

// delete the elemenets in  array
delete furits[0];
console.log(furits);

// concat the multiple arrays
let veg = ["brinjal", "onion", "potato", "tomato"];
let mergedarray = furits.concat(...veg, "cake");
console.log(mergedarray);

// flat - remove nested arrray to return single array
veg[4] = [34];
veg[5] = [14];
let flatarr = veg.flat();
// -- without float arr
console.log(veg);
// --- with flat arr
console.log(flatarr);

// splice() -- add and remove
veg.splice(0, 2, "joker"); // remove starting to end of the between elements , it replace the other element
console.log(veg);

//  slice() -- geting element
let get = furits.slice(0, 3); //  get starting to end of the between elements
console.log(get);

// ------------------------------------- 4. Destructring ----------------------

// array destructring---------------
let user1 = ["navin", "farmer", 78];
let fullname = user1[0];
let userage = user1[2];
let work = user1[1];
console.log(fullname, userage, work);

// ------- or ----
let [user2fulname, user2age, user2work] = ["karupusamy", 54, "farmer"];
console.log(user2fulname, user2age, user2work);

// --------------------- object destructring
let obj = {
  name: "kenime",
  age1: 65,
};

let { name, age1 } = obj;
console.log(name, age1);

// ------------------------------- 5 . ternary operator -------------------
// to allow 18+ only for car racing
let clientAge = 12;
let output = clientAge > 18 ? "allowed" : "not allowed";
console.log(output);

//-------------------------- rest and spreed operator --------------------

// 1.------------ rest operator $$ to get the miltple value at single array

function sum(...numbers) {
  //  print single array
  console.log(numbers);
  let total = 0;
  for (const nums of numbers) {
    total += nums;
  }
  console.log(total);
}
sum(12, 34, 65, 76);

// 2. -------------------- spreed operator  $$ it's clone the array

let arr1 = [1, 3, 4, 5, 7];

//clone the array 1
let arr2 = [...arr1];

console.log(arr2);

//-------------------------------- promise - async and await---------------

// 1.promise is object

const humans = new Promise((resolve, reject) => {
  let useralive = false;
  if (useralive) {
    resolve();
  } else {
    reject();
  }
});

humans
  .then(() => {
    console.log(`humans are alive`);
  })
  .catch(() => {
    console.log(`humans are dead`);
  })
  .finally(() => {
    console.log("Published");
  });
// ------------------------------------ async and await ------------------------

// 1. ----------------Async is always return promise---------------------

async function func() {
  return "hello";
}
console.log(func()); // return promise
func().then((msg) => {
  console.log(msg);
});

// 2.-----------------------Await only valid in Async------------------

// promise
const msg = new Promise((resolve, reject) => {
  resolve("hello");
});

async function signal() {
  x = await msg;
  console.log(x);
}
signal();

// ----------------------------------- fetch API--------------------------

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((jres) => console.log(jres));
