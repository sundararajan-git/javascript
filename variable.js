console.clear();

// -------------------------- variable-------------------------

var a=10;
let b=20;
const c=30;

// ------------------------------------re assign----------------

a=20;
console.log(a);

b=30;
console.log(b);

// c=40;          // is not applicable
// console.log(c);

//----------------------------------------- redecleration------

var a=20;
console.log(a);

// let b=30;   // is not applicable
// console.log(b);

// const c=40;  // is not applicable
// console.log(c);


// ---------------------------------------scopes--------------------------------

// golobal scopes
var x=11;
console.log("100");
let y=22;
const z=33;

{
    console.log(x);
    console.log(y);
    console.log(z);
}

{
    // local scopes
    a=22;
    b=33;
    console.log(a);
    console.log(b);
}



