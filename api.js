console.clear();
// -------------------- API - Application programing interface-----------
// ---------- To comunicating one program to anothor program

fetch('https://api-thirukkural.vercel.app/api?num=x')
.then((res)=>res.json())
.then((msg)=>console.log(msg[0].setup))
