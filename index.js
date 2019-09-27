// console.log('Hello World');
//==============
// let name = 'Mosh'; // string literal
// let NAME = "CAPITALIZED NAME"
// console.log(name);
// console.log(NAME);
//===============
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
//==============
// let age = 30; //number literal
// console.log(age);
// let isApproved = true;
// console.log(isApproved);
// let firstName; //undefined
// console.log(firstName);
// let secondName = undefined;
// console.log(secondName);
// let selectedColor = null;
// console.log(selectedColor);
//=================

// let name = "a string";
// console.log(typeof name);//string
// name = 5;
// console.log(typeof name);//number
// name = 5.1;
// console.log(typeof name);//number

// let firstName = undefined;
// console.log(firstName); //undefined is a value
// console.log(typeof firstName); //undefined is a primitive type
// let selectedColor = null;
// console.log(typeof selectedColor);//object,as well as array and function, are reference types
//====================
// let person = {
//     name: 'Mosh',
//     age: 30
// }

// console.log(person);

// person.name = 'John';// dot notation
// console.log(person.name);

// person['name'] = 'Mary';
// console.log(person.name);

// let selection = 'name';
// console.log(person[selection]);//Mary
//=================

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
selectedColors[3] = 1;
console.log(selectedColors);
console.log(typeof selectedColors); //In javascript, array is an object
console.log(selectedColors.length); //length is a property

//=============