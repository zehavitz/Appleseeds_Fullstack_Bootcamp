const leap = (year) => {
    if (year % 4 == 0) {
        if ((year % 100 != 0) || (year % 400 == 0)) {
            console.log("It is indeed a leap year.")
        }
        else {
            console.log("This is not a leap year.")
        }
    }
}

leap(2012);
leap(2100);
leap(2400);
