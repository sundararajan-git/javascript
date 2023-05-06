console.clear();

// ------------------------------Error Handling--------

let a = 11;
try{
    if(a<10){
        throw 'Enter Greater than 10'
    }
    else{
        console.log(a);
    }
}
catch(Error){
    console.log(Error);
}
finally{
    console.log('you are submited');
}