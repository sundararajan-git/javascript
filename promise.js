console.clear();

// -------------------- promise is object-----------------

function takkalbook(){
    return new Promise((resolve, reject) => {
        let bookingstatus = true;
        if(bookingstatus){
            resolve(500)
        }
        else{
            reject()
        }
    })
}

// if bookingstatus is conform 
takkalbook().then((amt)=>{
    console.log(`thanks bro and i will transfer the Rs ${amt}`);
})
.catch(()=>{
    console.log(`ok , i wil book in bus`);
})