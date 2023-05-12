console.clear();

// ---------------------------- memoery allaction-----------------------------

//     1.primitive type

let a = 100;
b = a;
a=200;
console.log("changed value of a",a);
console.log("changed value of a",b);


//           2. referance type

let obj1 = {name:"varun", age :32 }
obj2 = obj1;

obj1.name = "hari";
obj2.age = 79;

console.log('changed value of obj1',obj1);
console.log('changed value of obj1',obj2);