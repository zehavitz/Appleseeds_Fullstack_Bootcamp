function getFullDate(){
    const date = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()];
    const day = date.getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];

    const year = date.getFullYear();
    
    return (`Today is ${dayName} the ${day} of ${month}, ${year}`);
}

console.log(getFullDate());