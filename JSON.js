console.clear();

// ------------------------ json data-----------------------
//------------------- string to array / array to string------

// is not array, it's string -----    string to array--------
arr=`[                          
    {"name":"arjun","age":65},
    {"name":"ben10","age":10},
    {"name":"nany","age":26}
]`;

console.log(arr);

// ----------- let convert------
let parsed = JSON.parse(arr)
console.log(parsed);

// ---------------------------- array to string------------

console.log(JSON.stringify(parsed));




