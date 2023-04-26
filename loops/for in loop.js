console.clear();

// ---------------------  for in loops------------------------
// -------------------- over the properties of an object.
let arr = ['apple','orange','bannan',"graps"];
let furits = '';
for(let x in arr){ 
    furits += arr[x]+" "; // x is index of arr
    console.log(furits);
}

