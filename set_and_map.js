console.clear();

//-------------- set  obejects -  collection of values  and  value are unique ------------------------

//      1. primtive type

let arr1 = [ 12,3,4,5,752,12,4,8,9]
let arr2 = new Set(arr1)

console.log(arr1);
console.log(arr2); // avoid repeated values

//    2.referane type

let obj1 = [
    {name:"hari", age :43},
    {name:"hari", age :43}
]

let obj2 = new Set(obj1);
console.log(obj2);  // can not avoid repeated values


// -------------------- Map - map objects are collections of  [ key is unique and may be value same]
// key-value pairs.  
// A key in the Map may only occur once
// key or value can be object

let map1 = new Map()
map1.set('a',1)
map1.set('b',1)
map1.set('a',76)
console.log(map1); // to avoid repeated keys 

