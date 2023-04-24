console.clear();

//---------------------------------- numbers-----------------------
let num1 = 43;
let num2 = 12.76;

console.log(num1);
console.log(num2);

//----------------------------------- number to string-------------
console.log(String(num1));

//------------------------------------- number to boolean----------
console.log(Boolean(num1)); // 0 - false  else - true
console.log(Boolean(num2));

//---------------------------------- number method ----------------
 let a = 23.5;

//  console.log(a.toString());
// console.log(typeof a.toString());
// console.log(a.toExponential(5));
// console.log(a.toFixed(3));
// console.log(a.toPrecision(3));
// console.log(a.valueOf());
// console.log(parseFloat(a));
// console.log(typeof parseFloat(a));
// console.log(parseInt(a));
// console.log(Number.isInteger(a));
console.log(Number.isSafeInteger(a));
