console.clear();

// ------------------ string operator-----------------------

let t1 ='Good';
let t2 =' Morning';
console.log(t1 + " "+t2);
console.log(t1 += t2);

// ------------Nullish opertator -------------------------

// first argument if it is not nullish (null or undefined).
// Otherwise it returns the second argument.

let fname = null ;
let text = 'Good Night';
let result = fname ?? text;
console.log(result);

// ----------------------- typeof operator-----------------

console.log(typeof "hello");
console.log(typeof 3);


// ------------------ delete operator---------------------

const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  };
  delete person.age;
console.log(person);

// --------------The Spread (...) Operator------------

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

// ----------------- in operator --------------------
//  above the objects [name = person]

console.log(("firstName" in person),
("age" in person));

// ------------------------- instanaceof operator-----------------------

// ---------------- above  the array [ name  = year] 

console.log((year instanceof Array));   // Returns true
console.log((year instanceof Object));  // Returns true
console.log((year instanceof String));  // Returns false
console.log((year instanceof Number));  // Returns false