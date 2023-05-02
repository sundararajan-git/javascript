console.clear();

// ---------------------------------alearts--------------------------------------
alert("hello! welcome to cyber world");

// -------------------------------------console------------------------------------
console.log("hello ! , welcome to cyber world");


console.error("ERROR");


console.warn("WARRING");

//    if failed it show if true  not showing
let x=5;
let y=3;
console.assert(x + y == 11, "Expression returned false");

for(let i=0;i<5;i++){
    console.log(i);
    console.count();
}

console.info("hello");

// table
console.table(["cat","rat","bat"]);
console.table({name:"har",age:54,gender:"female"});

//time 
console.time();
for (let i = 0; i < 100000; i++) {
}
console.timeEnd();