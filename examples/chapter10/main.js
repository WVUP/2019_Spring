
// var firstName = 'Aaron';
// var lastName = 'Freeland';

var person = {
    firstName: 'Aaron',
    lastName: 'Freeland',
    age: 32,
};

function printFullName(person) {
    return `${person.lastName}, ${person.firstName}`;
}

// console.log(person.lastName + ', ' + person.firstName);
// console.log(`${person.lastName}, ${person.firstName}`);
// console.log(printFullName(person));

// function Person(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
// }

// Person.prototype = {
//     fullName: function() {
//         console.log(`${this.lastName}, ${this.firstName}`)
//     }
// }

// var k = new Person('Aaron', 'Freeland');


var people = [
    person,
    {
        firstName: 'Colton',
        lastName: 'Freeland',
        age: 8,
    },
    {
        firstName: 'Harper',
        lastName: 'Freeland',
        age: 1
    }
];

console.log(people);

// Only show young people
console.log(people.filter(x => x.age < 19));



function buildHtml() {
    var custom = document.getElementById('customText');

    var fullNames = people.map(x => `<p>${x.lastName}, ${x.firstName} </p>`);
    console.log(fullNames);
    var sampleHTML = fullNames.join('<br />');
    console.log(sampleHTML);
    var myContainer = document.getElementById('myContent');
    myContainer.innerHTML = '<div> custom text: ' + custom.value + '</div>' +sampleHTML;
}


var exampleButton = document.getElementById('testButton');
exampleButton.addEventListener('click', (evt) => {
    // console.log('you clicked the button');
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.target.innerHTML);
    buildHtml();
});

function addUser() {
    var user = {
        firstName: newUser.firstName.value,
        lastName: newUser.lastName.value
    };
    people.push(user);
    buildHtml();
    console.log(`new user created`, user);
}