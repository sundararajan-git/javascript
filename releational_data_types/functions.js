console.clear();

// methods = inbulid function are methods
// ----------------------------- function------------------------------------

function number(){
    return 54;
}
console.log(number());

// -------------------- parameter--

function add(num1 , num2){
    return num1 +num2;
}

console.log(add(5,5));

function multiply(num1,num2){
    console.log(num1*num2);
}
multiply(10,10)

// ---------- anynoymous function------------------

let func1 = function(num){
    let result = ++num;
    return result;
}
console.log(func1(190));

// ------------------------------ arrow function--------------

let func2 = (el)=>{
    console.log(el);
}

func2("hello word");

// ------------------- factory function--------------------

function user(name){
return{
    name: name,
    print(){
        console.log(this.name);
    }
}
}
const user1 = user('hari')
const user2 = user('aurn')
user1.print();
user2.print();

// ------------------- constracter function-------------------------

function Person(age){
    this.age;
    this.greet = function(){
        console.log(`my age is ${age}`);
    };
}
const user01 = new Person(32);
user01.greet();

// ---------------- call back  function----------------------

function fname(name){
    console.log(`my name is ${name}`);
}

function greeting(call){
    call('ben10')
}
greeting(fname);

// --------------- for each function----------------------

let arr = ['orange','apple','cova']

arr.forEach((el)=>console.log(el.toUpperCase()))

// -------------------------- returning function --------------------

function getresult(x){
    return function(y){
        return x+y;
    }
}
const add1 = getresult(5);
console.log(add1(5));