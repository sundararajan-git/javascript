console.clear()

// ----------------------- switch statements-----------------------------------

let num1 = 1;
switch(num1){
    case 0:
        console.log('num1 is 0');
        break;
    case 1:
        console.log('num1 is 1');
        break;
    case 2:
        console.log('num1 is 2');
        break;
    default:
        console.log('this not a number or greater than 2');
}

// ----------------------- Enter your mark and  get your garde -------------

let mark = prompt("Enter your mark [0 to 100 ]");
if(mark<=100){
    switch(true){
        case mark>=90:
            console.log('your garde is A+');  // A+ = 90 TO 100
            break;
        case mark>=80:
            console.log('your garde is A');  // A = 80 TO 90
            break;
        case mark>=70:
            console.log('your grade is B+'); // B+ = 70 TO 80
            break;
        case mark>=60:
            console.log('your garde is B');  // B = 60 TO 70
            break;
        case mark>=50:
            console.log('youru garde is C+'); // C+ = 50 TO 60
            break;
        case mark>=40:
            console.log('your garde is C');  // C = 40 TO 50
            break;
        default:
            console.log('your grade is fail');
    }
}
else{
    console.log('check your mark');
}