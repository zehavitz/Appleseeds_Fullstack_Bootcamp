const percentageOfWorld1 = (population) => population / 7900000000 * 100;

const populationPercentages = (populations) => {
   let percentages = [];
    for (let i = 0; i < populations.length; i++) {
        percentages.push(`${percentageOfWorld1(populations[i]).toFixed(2)}%`)
    }
    return percentages;
}


let populations = [20000000, 13000000, 6000000, 32000000];
console.log(populationPercentages(populations));