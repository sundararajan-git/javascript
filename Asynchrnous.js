console.clear();

// ----------------------- Asynchornous-----------------------

console.log('setp 0');
setTimeout(()=>console.log('setp 2'),2000);
setTimeout(()=>console.log('setp 1'),0000);
setTimeout(()=>console.log('setp 10'),5000);

// --------------------- set interval ---------------------

setInterval(() => console.log('world'), 1000); // Each 1second print the word