window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-bar").style.padding = "0";
    document.getElementById("companylogo-container").style.height = "20px";
    document.getElementById("companylogo-container").style.width = "75px"
    document.getElementById("nav-bar-buttons").style.padding = "0";
  } else {
    document.getElementById("nav-bar").style.padding = "40px 0";
    document.getElementById("companylogo-container").style.height = "40px";
    document.getElementById("companylogo-container").style.width = "150px"
    document.getElementById("nav-bar-buttons").style.padding = "80px 0";
  }
}
