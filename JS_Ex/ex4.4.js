
const boom = (n) => {
    for (let i = 1; i <= n; i++) {
        if ((i % 7 == 0) || (String(i).split("").includes('7'))) {
            console.log("Boom")
        } else console.log(i)
    }
};

boom(100);


