// empty array that allows us to store our each user upon submit
var users = [];

function buildHTML(person) {
    var html = `
        <div class="col col-sm-4">
            <p>${person.email}</p>
            <p>Ssshhh, secret: ${person.password}</p>
        </div>
    `;
    return html;
}

// Go and get the element
const btn = document.getElementById('buildContainer');

// add a listener for the event we care about, in this case the 'click' event
// whenever someone clicks or element it will fire our function
btn.addEventListener('click', () => {
    // We could manually check if a form is valid...just as an example
    var isFormValid = myForm.checkValidity();
    console.log(`is the form valid: ${isFormValid}`);

    // create a new user object that contains the information the user entered
    var user = {
        email: myForm.email.value,
        password: myForm.password.value
    };
    // add the new user to our list of users
    users.push(user);
    // output to console for development purposes
    console.log(users);
    // generate html to put on our webpage
    // const html = buildHTML(user);

    // iterate through each user and map html out of it
    let html = '<div class="row">'
    
    // What is really happening..
    // var row = document.createElement('div')
    // row.classList.add('row');

    html += users.map(buildHTML).join('')
    html += '</div>';

    // find our div placeholder where we want to put our content and set its innerHTML to our generated html
    document.getElementById('display').innerHTML = html;
});

// example of watching keyup to have more real-time validation
const validationElement = document.getElementById('passwordValidation');
myForm.password.addEventListener('keyup', () => {
    var val = myForm.password.value;
    if (val.length < 8) {
        validationElement.innerHTML = 'not good enough'
        validationElement.style.backgroundColor = 'red';
    }else{
        validationElement.innerHTML = '';
        validationElement.style.backgroundColor = 'transparent';
    }
    console.log(val);
});

myForm.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();
})

var person = {
    firstName: 'Aaron',
    lastname: 'Freeland',

};