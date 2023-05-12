console.clear();

// ---------------------------------samll definations----------------

// class - constaines variables and function
//  funtion - is set of rules
// objects - instance of class
// function are act like class

// -----------------------create funtion--------------------------------

function print(){
    firstname="arun";
    console.log(firstname);
}

print();

// ------------------------------- OR (anonymous funtions)  ---------------------------------------

let get=function(){
    lastname="kumar";
    console.log(lastname);
}

 get();

// ----- function is class before ES6------------------------------------------------------
// like class
let get1=function(name){
    this.lastname=name;
    this.getname=function() {
        return `this my ${this.lastname}`;
    }
}
// create objets
const result = new get1("mani");
const result2 = new get1("leveis");

console.log(result.lastname);
console.log(result2.lastname);
console.log(result.getname());
console.log(result2.getname());

// -----------------------------outside to add function in function---

get1.prototype.getname = function() {
    return `this my ${this.lastname}`;
}

// --------------- ES6 Version  create class ----------------------------

class printnew{
    constructor(name){
       this.fname=name;
    }
    printname(){
        return `print ${this.fname}`
    }
}
// objects
const test1=new printnew("ben 10");

console.log(test1.printname());

// -----------------------------abstraction-------------------------------
class printnew{
    constructor(){
    }
    printname(name){
        this.fname=name;
        return `print ${this.fname}`
    }
}
// objects
const test2=new printnew("ben 10");
console.log(test2.printname());

// ----------------------------------inheritance------------------

class company{
    company;
    constructor(company){
        this.company=company;
    }
    print(){
        return `company name is ${this.company}`;
    }
}

class brach extends company{
    constructor(company,brachname){
        super(company)
        this.brachname=brachname;
    }
    print(){
        return `company name is ${this.company} and my branch is ${this.brachname} `+ super.print();
    }
}

// create objects of class
const test10=new company("apple");
const test100=new brach("apple","japan");

console.log(test10.print());
console.log(test100.print());
