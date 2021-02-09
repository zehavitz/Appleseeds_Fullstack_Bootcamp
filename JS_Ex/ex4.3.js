const average = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
const winner =(johnAvg,mikeAvg) => {
    if(johnAvg>mikeAvg) {
        console.log (`The winner is John's team with ${johnAvg} average score`)
    } else if (mikeAvg>johnAvg) {
        console.log (`The winner is Mike's team with ${mikeAvg} average score`)
    } else console.log (`It's a draw of ${johnAvg}`)
}
let johnGrades=[89,120,103];
let mikeGrades=[116,194,123];
winner(average(johnGrades),average(mikeGrades));

johnGrades=[150,120,103];
mikeGrades=[116,110,123];
winner(average(johnGrades),average(mikeGrades));





