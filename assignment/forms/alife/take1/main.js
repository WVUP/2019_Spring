// Get submit buttons from page
var button1 = document.getElementById("submit1");
var button2 = document.getElementById("submit2");

button1.addEventListener('click', () => {
    var error = "";
    // collect inputs from user
    var emailText = document.getElementById("emailInput").value;
    var passwordText = document.getElementById("passwordInput").value;
    var isValid = document.getElementById("login-form").checkValidity();
    if (!isValid){
        alert("Your email or password is incorrect.\nFor password please use at least\none capital letter,\none lower case letter,\nand one number.");
    }
    // Change display of divs to display user input
    var emailDisplay = document.getElementById("displayEmail");
    emailDisplay.innerHTML = emailText;
    var passwordDisplay = document.getElementById("displayPassword");
    passwordDisplay.innerHTML = passwordText;
})

// Create array for users
var user = [];

button2.addEventListener('click', () => {
    // Create new user using inputs and push to user array
    var newUser = {
        firstName: document.getElementById("fName").value,
        lastName: document.getElementById("lName").value,
        email: document.getElementById("email").value,
        userName: document.getElementById("userName").value
    }
    var isValid = document.getElementById("signup-form").checkValidity();
    if (!isValid){
        alert("Please make sure you entered a valid email and all fields have data.");
    }else{
        user.push(newUser);
    }

    // create the display I want to use for info
    var info = user.map(x => `<p>${x.firstName}, ${x.lastName}, ${x.email}, ${x.userName}</p>`);
    console.log(info);
    // Join lists of info together with br tags
    var lines = info.join("</br>");
    // Change container html to display the user array as formatted
    var container = document.getElementById("displayUsers");
    container.innerHTML = lines;
})