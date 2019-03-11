let container = document.getElementById("buildContainer");
let arr = [];

container.addEventListener('click', () => {
    let user = {
        email: myForm.email.value,
        password: myForm.password.value
    }
    arr.push(user);
    document.getElementById("showUser").innerHTML =
    arr.map(x => `<p class="col-md-3">${x.email}, ${x.password}</p>`).join("");
    console.log(user);
});

let person = {
    firstName: "Alex",
    lastName: "Freeland"
};
