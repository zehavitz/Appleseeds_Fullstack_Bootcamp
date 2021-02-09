const arrayLengths = (arr) => {
let arrLengths=[];
for(let i=0; i<arr.length; i++) {
    arrLengths.push(arr[i].length);
}
return(arrLengths);
}

const arr=["boo", "doooo", "hoo","ro"];
console.log(arrayLengths(arr));
