const validatePassword = (password) => {
    if (password.length >= 7) {
        console.log("Strong")
    } else {
        console.log("Weak")
    }
};

const validatePassword2 = (password) => {
    console.log(password.length >= 7 ? "Strong" : "Weak");
};

const validatePassword3 = (password) => {
    password.length >= 7 && console.log("Strong");
    password.length < 7 && console.log("Weak");
};

const validatePassword4 = (password) => {
    password.length > 7 && password.search(/[A-Z]/) !=-1 && console.log("Very Strong");
    password.length == 7 && console.log("Strong");
    password.length < 7 || password.search(/[A-Z]/) ==-1 && console.log("Weak");
};


validatePassword4("hhhhhHhh");
