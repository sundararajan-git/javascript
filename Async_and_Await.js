console.clear();

// ----------------Async is always return promise---------------------
//-----------------------Await only valid in Async------------------

async function fun(){
    return 'hello'
}
console.log(fun()); // return promise

fun().then((msg)=>console.log(msg))


// ------------------------------- async and await----------------

let a = new Promise((resolve, reject) => {
    let b =true;
    if(b){
        setTimeout(resolve,5000,`this set timeout function`)
    }
    else{
        reject(`false`)
    }
})

async function B(){
    console.log('welcome to async');
    x = await a;
    console.log(x);
    console.log('finaly');
}
B();