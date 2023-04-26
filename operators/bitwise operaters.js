console.clear();

// ----------------bitwise operators-----------------------------

let a=2;
let b=3;
let c=5;
console.log(a&b); // 0000 0010 * 0000 0011 = 0010  AND OPERATOR
console.log(a|b); // 0000 0010 + 0000 0011 = 0011  OR OPERATOR
console.log(a^b); // 0000 0010 ^ 0000 0011 = 0001  XOR OPERATOR
console.log(~b); //   ~3 = 3+1 = 4 = -4            NOT OPERATOR
console.log(a<<1); // 0000 0010 = 0000 0100 = 4    LEFT SHIFIT
console.log(b>>1); // 0000 0011 = 0000 0001 = 1   RIGHT SHIFT
console.log(c>>>1);  //  5 = 0101 = 010 =2        UNSIGNED RIGHT

