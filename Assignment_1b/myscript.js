function myFunction() {
    document.body.style.backgroundColor = "#1a1a1a";
}
function myFunction2() {
    document.body.style.backgroundColor = "white";
}

function showInputs() {
    var nameValue = document.getElementById("nameInput").value;
    var emailValue = document.getElementById("emailInput").value;
    var passwordValue = document.getElementById("passwordInput").value;

    alert("Name: " + nameValue + "\nEmail: " + emailValue + "\nPassword: " + passwordValue);
}

function myFunctionpass() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
    }
}

openRegister = () => {
    window.open("register.html", "_self")
}
openSignUp=()=>{
    window.open("signup.html", "_self")
}