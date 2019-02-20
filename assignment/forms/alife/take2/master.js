var firstName;
var lastName;
var userName;
var email;
var passwordInput = document.getElementById("passwordInput");
var x = document.getElementById("message");
var passwordConfirm;
var newUser = [];

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
        if(email == "" || ! email.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
            alert("Please enter an email.");
            return false;
        }
        // check for username
        if(userName == ""){
            alert("Please enter a username.");
            return false;
        }
        // if passwords and that they match
        if(passwordConfirm == "" || password == "" || ! password.match("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{2,}$")){
            alert("Please make sure you entered a valid password and confirmed it.");
            return false;
        }else if(passwordConfirm != password){
            alert("Please make sure passwords match.");
            return false;
        }

        // Display results when conditions are met.
        var user = {
            userFirstName: firstName,
            userLastName: lastName,
            userEmail: email,
            userUsername: userName,
            userPassword: password
        }
        newUser.push(user);
        console.log(newUser);
        var userMap = newUser.map(x => `<div class="col-sm-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">${x.userUsername}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">${x.userEmail}</h6>
                                                    <p class="card-text">${x.userFirstName}</p>
                                                    <p class="card-text">${x.userLastName}</p>
                                                    <p class="card-text">${x.userPassword}</p>
                                                </div>
                                            </div>
                                        </div>`);
        var userDisplayArea = document.getElementById("showNewUsers");
        var display = userMap.join();
        userDisplayArea.innerHTML = display;
    }else{
        // on index page
        // get values from inputs
        email = document.getElementById("emailInput").value;
        password = document.getElementById("passwordInput").value;
        // if checkbox is checked, password matches regex, and email not blank alert success and show email and password.
        if(document.getElementById("rememberMe").checked == true){
            if(password.match("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{2,}$") && email.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
                alert("Huzzah, you're a genius!\n Email: " + email + "\nPassword: " + password);
            }else{
                alert("You must've screwed something up. Good job.");
            }
    }
        // also logs email and password to console.
        console.log(email + " " + password);
    }
})