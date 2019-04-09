var mybutton = document.getElementById("subbtn");
mybutton.addEventListener("click", evnt => {
  evnt.preventDefault();
});

function vaildate() {
  var firstName = document.getElementById("firstNames").value;
  var lastName = document.getElementById("lastName").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("myEmail").value;
  if (firstName === "") {
    alert("Please enter your name with no numbers");
    return false;
  } else if (lastName === "") {
    alert("Last name must be filled out");
    return false;
  } else if (password === "") {
    alert("password must be filled out");
    return false;
  } else if (email === "") {
    alert("Email must be filled out");
    return false;
  } else {
    buildHtml();
  }
}

function buildHtml() {
  var message1 = document.getElementById("myEmail");
  var message2 = document.getElementById("firstNames");
  var message3 = document.getElementById("lastName");
  var message4 = document.getElementById("password");
  var myContainer = document.getElementById("myContent");
  myContainer.innerHTML =
    "<div> first name: " +
    message2.value +
    "<br/>last name: " +
    message3.value +
    "<br/>password: " +
    message4.value +
    "<br/> email: " +
    message1.value +
    "</div>";
}
