var nav = document.getElementById("nav-container");
nav.style.top = "0px";

window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        nav.style.top = "0px";
    } else {
        nav.style.top = "-45px";
    }
});