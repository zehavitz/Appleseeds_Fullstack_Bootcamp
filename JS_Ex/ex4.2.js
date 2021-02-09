const  score=(x) => {
    if(x>=0 && x<=64) {
        return "F";
    } else if(x>=65 && x<=69) {  
        return "D";
    } else if (x>=70 && x<=79) {
        return "C";
    } else if (x>=80 && x<=89) {
        return "B";
    } else if (x>=90 && x<=100) {
        return "A";
    }
};
console.log (score(75));
