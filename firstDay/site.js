
var users = [];


function buildHTML(person) {
    var html = `
        <div>
        
        <p>${person.email}</p>
        <p>Sssshhh, secret: ${person.password}</p>
        </div>   
    
    `;
        return html;



}



const btn = document.getElementById('buildContainer');
 btn.addEventListener ('click' , () => {
     console.log('you clicked it');
     console.log(myForm);
     var user = {
        email: myForm.email.value,
        password: myForm.password.value

    
     };
     users.push(user);
     console.log(users);
     let html = '<div class="row">'
     html += users.map(buildHTML).join('')
     html += '</div>'
     //const html = buildHTML(user);
     let html = users.map(buildHTML)
     document.getElementById('display').innerHTML = html;
     console.log(html);
 });

 myForm.password.addEventListener('keyup' , () => {
    var val = myForm.password.value;
    if (val.len < 8) {
        validationElement.innerHTML = 'not good enough'
        validationElement.style.backgroundColor = 'red';
    }
    else {

        validationElement.innerHTML = '';
        validationElement.style.backgroundColor = '';
    }
    console.log(val);
 });

var person = {
    firstName = 'Jacob',
    lastName = 'Goff',


}