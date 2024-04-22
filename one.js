
function getEmail(){
    console.log("Email");
}

function UserLogin(){
    console.log("User Login");
    getEmail()
}

function AccessAll() {
    console.log("access all is calling ");
    UserLogin()
}

AccessAll();