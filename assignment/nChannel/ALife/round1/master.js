// get modals
let chatModal = document.getElementById("chat-modal");
let quoteModal = document.getElementById("quote-modal");
let phoneModal = document.getElementById("phone-modal");

// get the button to open modals
let openChatModal = document.getElementById("chat-now");
let openQuoteModal = document.getElementById("get-a-quote");
let openPhoneModal = document.getElementById("phone")

// get the close modals
let closeChatModal = document.getElementsByClassName("close")[2];
let closeQuoteModal = document.getElementsByClassName("close")[1];
let closePhoneModal = document.getElementsByClassName("close")[0];

// when user clicks, open modal
openChatModal.onclick = function () {
    chatModal.style.display = "block";
}

openQuoteModal.onclick = function () {
    quoteModal.style.display = "block";
}

openPhoneModal.onclick = function () {
    phoneModal.style.display = "block";
}

// clicking close causes modal to close
closeChatModal.onclick = function (event) {
    chatModal.style.display = "none";
    event.stopPropagation();
}

closeQuoteModal.onclick = function (event) {
    quoteModal.style.display = "none";
    event.stopPropagation();
}

closePhoneModal.onclick = function (event) {
    phoneModal.style.display = "none";
    event.stopPropagation();
}

// clicking outside modal causes modal to close
window.onclick = function (event) {
    if (event.target == chatModal || event.target == quoteModal || event.target == phoneModal) {
        chatModal.style.display = "none";
        quoteModal.style.display = "none";
        phoneModal.style.display = "none";
    }
}

let navBar = document.querySelector("#nav");
let navLogo = document.querySelector("#logo");
let navLink = document.querySelectorAll(".nav-link");
let navLinkSpecial = document.querySelectorAll(".nav-link-special");

window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        navBar.style.height = "50px";
        navLogo.style.marginTop = "-15px";
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].style.top = "20px";
        }
        for (let i = 0; i < navLinkSpecial.length; i++) {
            navLinkSpecial[i].style.opacity = "0";
        }
    } else {
        navBar.style.height = "100px";
        navLogo.style.top = "2.5em";
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].style.top = "3.5em";
        }
        for (let i = 0; i < navLinkSpecial.length; i++) {
            navLinkSpecial[i].style.opacity = "1";
        }
    }
});