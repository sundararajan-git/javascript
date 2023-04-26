console.clear();

// ----------------------------------- objects-----------------------------------

// ------------------------------ create objects-----------------------------

const person1 = {
    fname:"hari",
    age:43,
    alive:true,
    address:{           // nested object
        no:32,
        street:"west street",
        city:"chennai"
    },
    buy:function(){              // method
        console.log(this.fname);
    }
};

// ----------------------------- add another value in person1 object-----------
person1.new="This new element";

// ------------------------- print object---------------
console.log(person1);

// ------------------------- accessing objects values-----------------------
// dot notation
console.log(person1.fname);
console.log(person1.age);
console.log(person1.address);
person1.buy()

// bracket notation
console.log(person1['alive']);

// ---------------------------- another way to create object-----------

const person2 = new Object();
person2.fname="arun";
person2.age = 54;
person2.alive = false;
person2.buy=function(){
    console.log(this.fname);
}
console.log(person2);
console.log(person2.age);
person2.buy();

// --------------------- change the value in person2 object--------------

person2.alive=true;
console.log(person2.alive);

// ---------------------------- clone objects [person 2]----------------------------

let cloneObj = {...person2}

console.log(cloneObj);
