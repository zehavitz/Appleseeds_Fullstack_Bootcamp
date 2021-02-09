//Q1
let arr = [];
arr.length = 100;
arr.fill("z");
console.log(arr);

//Q2
let arr2 = [];
arr2= Array.from({ length: 100 }, (_, i) => 1 + i);
console.log(arr2);


//Q5
const x=Array.isArray(arr);
console.log(x);


//Q6
let arr1=[1,2,4];
let copyOfArray1 = arr1.slice(0); //won't affect the original
let copyOfArray2 = arr1; //affect the original - it's a reference
console.log(copyOfArray1);
console.log(copyOfArray2);

arr1[2]=5;
console.log(copyOfArray1);
console.log(copyOfArray2);
