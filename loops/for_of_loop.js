console.clear();

// ----------------- for of loop--------------------------------
// ---------------- over the values of any iterable.-------------

let arr = ["apple",'orange','mango','graps']
let furits = "";
for (let x of arr){
    furits += x + " " // x is values of array
    console.log(furits);
}