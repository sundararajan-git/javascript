console.clear();

// ----------------------------- ternery operator---------------------------------------
//  variable = (condition) ? true : flase
let pass = false;
let result = pass ?"you are pass ": "you are fail";
console.log(result);

// ------------------------ grade find out------------------------------------------

let mark=90;
let grade;
if(mark<=100){
     grade= mark>=90?"A":mark>=80?"B":mark>=70?"C":mark>=60?"D":mark>=50?"E":"you are fail";
     console.log(grade);
}
else{
    console.log("check your mark");
}