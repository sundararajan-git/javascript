console.clear();

// ---------------------------------- array--------------------------------------------

const myArray = ["apple",32,true,undefined,null];

console.log(typeof myArray);

console.log(myArray);

console.log(myArray[2]);

myArray[5]='orange';

console.log(myArray);

console.log( typeof myArray[3]);


// ----------------------------properties-----------------------------

console.log(myArray.length);

console.log(myArray.sort());

console.log(Array.isArray(myArray));

// ------------------------ looping array---------------------------

let len = myArray.length;
for(i=0;i<len;i++){
    console.log(i);
}

// ----------------------- array method-------------------------------

console.log(myArray.toString());

console.log(myArray.join("/"));

// ------------------------ add element------------------------

myArray.push("honey");
console.log(myArray);

// -------------------------- delete last element-----------------

myArray.pop();
console.log(myArray);

// ------------------------delete first element--------------

myArray.shift();
console.log(myArray);

// ------------------------- delete element----------------

delete myArray[2];
console.log(myArray);

// ----------------------- add first element-------------

myArray.unshift("lemon");
console.log(myArray);

// ---------------------- concat the array--------------------

let myArray1 = [1,2,3,4];

console.log(myArray.concat(myArray1));

// --------------add new item on array-----------------------

myArray1.splice(0,1,200 )
console.log(myArray1);

// --------------------- remove element------------

myArray1.splice(0,1); // delete index start to end
console.log(myArray1);

console.log(myArray1.slice(0,1)); // delete index around range 

// ------------------------- array reverse--------------------------

console.log(myArray.reverse());