var mybutton = document.getElementById("subbtn");
mybutton.addEventListener("click", evnt => {
  evnt.preventDefault();
});

//function vaildate() {
// var firstName = document.forms["forms"]["firstinput"];
// if (firstName.value == "") {
//   name.focus();
//   return false;
//  }
//}

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
