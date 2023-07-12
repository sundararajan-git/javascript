console.clear();
// -------------------- API - Application programing interface-----------
// ---------- To comunicating one program to anothor program

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res)=>res.json())
.then((msg)=>console.log(msg))
