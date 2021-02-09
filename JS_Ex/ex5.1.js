const countryToLiveIn = (language, isIsland, population,country) => {
    if (language=="English" && population<50000000 && !isIsland && country=="Finland") {
        console.log("You should live in Finland.") 
    } else {
        console.log("Finland does not meet your criteria");
    }
}

countryToLiveIn("English",true,45000000,"Finland");
countryToLiveIn("English",false,45000000,"Finland");