console.clear();
// -------------------- API - Application programing interface-----------
// ---------- To comunicating one program to anothor program

fetch('https://api-thirukkural.vercel.app/api?num=x')
.then((res)=>JSON(res))
.then((msg)=>console.log(msg[0].setup))