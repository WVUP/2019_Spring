var firstName;
var lastName;
var userName;
var email;
var passwordInput = document.getElementById("passwordInput");
var x = document.getElementById("message");
var passwordConfirm;

passwordInput.onfocus = function() {
    x.style.opacity = "1";
    x.style.transition = "opacity 2s";

}
passwordInput.onblur = function() {
    x.style.opacity = "0";
    x.style.transition = "opacity 2s";
}

if(document.getElementById("passwordConfirmInput") != null){
    passwordConfirm = document.getElementById("passwordConfirmInput");
    passwordConfirm.onfocus = function() {
        x.style.opacity = "1";
        x.style.transition = "opacity 2s";
    
    }
    passwordConfirm.onblur = function() {
        x.style.opacity = "0";
        x.style.transition = "opacity 2s";
    }
}

submitMe.addEventListener('click', () => {
    // if confirm password not null then were on sign up page.
    if(document.getElementById("passwordConfirmInput") != null){
        // Get values from inputs
        passwordConfirm = document.getElementById("passwordConfirmInput").value;
        password = document.getElementById("passwordInput").value;
        firstName = document.getElementById("firstNameInput").value;
        lastName = document.getElementById("lastNameInput").value;
        userName = document.getElementById("usernameInput").value;
        email = document.getElementById("emailInput").value;

        // check for first and last name
        if(firstName == "" || lastName == ""){
            alert("Please enter your first and last name.");
            return false;
        }
        // check for email
        if(email == ""){
            alert("Please enter an email.");
            return false;
        }
        // check for username
        if(userName == ""){
            alert("Please enter a username.");
            return false;
        }
        // if passwords and that they match
        if(passwordConfirm == "" || password == ""){
            alert("Please make sure you entered a password and confirmed it.");
            return false;
        }else if(passwordConfirm != password){
            alert("Please make sure passwords match.");
            return false;
        }
    }else{
        // on index page
        // get values from inputs
        email = document.getElementById("emailInput").value;
        password = document.getElementById("passwordInput").value;
        // if password matches regex alert success and show email and password.
        if(password.match("^[a-zA-Z0-9]\\w{2,14}$")){
            alert("Huzzah, you're a genius!\n Email: " + email + "\nPassword: " + password);
        }
        // also logs email and password to console.
        console.log(email + " " + password);
    }
})