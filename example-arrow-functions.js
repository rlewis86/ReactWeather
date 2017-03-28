//Basic For Each
var names = ['Rob', 'Renee', 'Scott'];
names.forEach(function (name) {
    console.log('For Each', name);
});

//For Each using arrow functions (This can have multiple lines with the '{}')
names.forEach((name) => {
    console.log('Arrow Func', name);
});

//Arrow function with one line
names.forEach((name) => console.log(name));

//Arrow fucntion without 'function' syntax
var returnMe = (name) => name + '!';
console.log(returnMe('Rob'));

// When using arrow functions in objects, 'this' resolves correctly
var person = {
    name: 'Andrew',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hello to ' + name)
        });
    }
}
person.greet();

//regular function
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));

//Expression arrow function (1 Line)
var arrowAdd = (a, b) => a + b;
console.log(arrowAdd(3, 4));

//Statement arrow function (Multiple Lines)
var arrowAdd2 = (a,b) => {
    return a + b;
}
console.log(arrowAdd2(9, 8));

