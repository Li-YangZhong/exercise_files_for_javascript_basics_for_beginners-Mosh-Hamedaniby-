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

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors);
// console.log(selectedColors[0]);
// selectedColors[2] = 'green';
// console.log(selectedColors);
// selectedColors[3] = 1;
// console.log(selectedColors);
// console.log(typeof selectedColors); //In javascript, array is an object
// console.log(selectedColors.length); //length is a property

//=============

// function greet (name) {
//     console.log('Hello ' + name);

// }

// greet('John');
// greet('Mary');
//==================

// console.log();
//===============

// let x = 10;
// let y = 3;
// console.log( x ** y);//1000; exponentiation

// console.log( x++);// 10
// console.log(x);//11
// console.log( ++y );//4
// console.log(y); //4

//===============
// let x = 10;
// x **= 3;
// console.log(x);// 1000

//=============
// console.log(true === 1);//false; strict equality(checking type + value)
// console.log(true == 1);//true; loose equality (checking value)
// console.log(true == '1');//true
//==============

// console.log(2 > 1 ? "yes" : "no"); //ternary operator or conditional operator

//==============

// console.log(false || true);//true
// console.log(false || 'Mosh');// Mosh
// console.log(false || 1); //1
// console.log( false || 1 || 2);// 1, short-circuting; the evaluation will stop as soon as the result is determined.

//Falsy (false)
//undefined
// null
// 0
// false
// '
// NaN
//==============
//bitwise operators
// // 1 = 00000001
// // 2 = 00000010
// // 3 = 00000011
// console.log(1 | 2); // Bitwise OR; result is 3
// console.log( 1 & 2); //Bitwise AND; result is 0

//=================

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission; // use bitwise or (|) operator to add permission
// console.log(myPermission); // 6

// let message = (myPermission & readPermission) ? 'yes': 'no'; //use bitwise and (&)operator to check if a permission is set

// console.log(message); // yes
//================

// let hour = 20;

// if (hour >= 6 && hour < 12)
//     console.log('Good morning');
// else if (hour >= 12 && hour < 18)
//     console.log('Good afternoon');
// else
//     console.log('Good evening');
//===============

// let role;

// switch (role) {
//   case 'guest':
//     console.log('Guest User');
//     break;
  
//   case 'moderator':
//     console.log('Moderator User');
//     break;

//   default:
//     console.log('Unknown User');
// }
//================

// for (let i = 0; i < 5; i++) {
//   console.log('Hello World.', i);
// }

// let i = 0;
// while(i <= 5) {
//   if( i %2 !== 0) console.log(i);
//   i++;
// }
//================
// let i = 0;
// while(i < 5) {
//   console.log(i);
//   i++;
// }
//=============

// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);
//==================
// const person = {
//   name: 'Mosh',
//   age: 30
// }

// for (let key in person)
//   console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//   console.log(index, colors[index]);

// for (let color of colors) {
  // console.log(color);
// }
  //================

  // let i = 0;
  // while(i <= 10) {
  //   // if (i === 5) break;
  //   if (i % 2 === 0) {
  //     i++;
  //     continue;
  //   }
  //   console.log(i);
  //   i++;
  // }
//================
// console.log(typeof NaN);

// const output = fizzBuzz(150);
// console.log(output);

// function fizzBuzz(input) {
//   if( typeof input !== 'number')
//     return NaN;

//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//   if( input % 3 === 0) {
//     return 'Fizz';
//   }

//   if( input % 5 === 0) {
//     return 'Buzz';
//   }

//   return input;
// }
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if(speed < speedLimit + kmPerPoint) {
//         console.log('OK');
//         return;
//     }

//     const points = Math.floor((speed - speedLimit) /kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//     else
//         console.log('Points', points);
// }

// checkSpeed(180);
//====================

// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// }

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) 
//     console.log(key);
// }
//================
// showNumbers(10);
// function showNumbers(limit) {
//   for(let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
// }
//==========
// const array = [0,null,undefined, false, NaN, '', 2,3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for( let value of array) 
//     if(value)
//       count++;
//   return count;
// }
//============

// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// }

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) {
//     if( typeof obj[key] === 'string')
//       console.log(key, obj[key]);
//   }
// }

//================

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;

//   for( let i = 0; i <= limit; i++) 
//     if(i % 3 === 0 || i % 5 === 0)
//       sum += i;

//   return sum;
  
// }
//==============
// showStars(8);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = '';
//     for (let i = 0; i < row; i++)
//       pattern += '*';
//     console.log(pattern);
//   }
// }
//================

// function  calculateGrade(marks) {
//   const average = calculateAverage(marks);

//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';
// }

// function calculateAverage(array) {
//   let sum = 0;
//   for (let value of array)
//     sum += value;
//   return sum / array.length;
// }

// console.log(calculateGrade([90]));
//===============
// showStars(5);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = '';
//     for (let i = 0; i < row; i++) 
//       pattern += '*';
//     console.log(pattern);
//   }
// }
//===========
// function showPrimes(limit){
//   for (let number = 2; number <= limit; number++)
//     if(isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0)
//       return false;

//     return true;
// }

// showPrimes(1000);
//===========
// //object-oriented programming

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   isVisible: true,
//   draw: function() {
//     console.log('draw');
//   }
// };

// circle.draw(); //method
//===========
// //Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw');
//     }
//   };
// }
// const circle1 = createCircle(1);
// console.log(circle1);
//=================
// //Camel Notation: oneTwoThreeFour
// //Pascal Notation: OneTwoThreeFour

// //Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const circle = new Circle(1);
// circle.draw();
//============
// //dynamic nature of objects
// const circle = {
//   radius: 1
// }

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);
//============

//every object has a constructor property

//Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw');
//     }
//   };
// }
// const circle = createCircle(1);

// console.log(circle.constructor);

// //Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const another = new Circle(1);

// console.log(another.constructor);
//===========

// //functions are objects

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const another = new Circle(1);

// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor);
// Circle.call({}, 1)

// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//   console.log('draw');
// }
// `);

// const circle = new Circle1(1);
// console.log(circle);
//=========

// value vs. reference types

//primitives are copied by their value
//objects are copied by their reference

// let x = { value: 10};
// let y = x;

// x.value = 20;

// console.log(y);
// //------------
// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number);//10

// //---------

// let obj = { value: 10};

// function increase(obj) {
//   obj.value++;
// }

// increase(obj);
// console.log(obj);
//=================
// // enumerating properties of an object
// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };

// for ( let key in circle) 
//   console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//   console.log(key);

// for (let entry of Object.keys(circle))
//   console.log(entry);

// if ('color' in circle) console.log('yes');
// if ('radius' in circle) console.log('yes');

//===============
// //cloning an object
// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };

// // const another = {};
// // for (let key in circle)
// //   another[key] = circle[key];

// // the following one line of code equals the above three lines of code

// // const another = Object.assign({}, circle);

// //the following method is the simplest way of cloning an object

// const another = { ...circle};

// console.log(another);
//===========

// Javascript manages garbage collection automatically

//=============
// //Math is a built in object in Javascript

// console.log(Math.PI);

// console.log(Math.abs(-5));

// console.log(Math.random());

// console.log(Math.round(1.9));

// console.log(Math.max(1,2,3,4,5));

// console.log(Math.min(1,2,3,4,5));

//=========

// //string primitive

// const message = 'hi';
// console.log(typeof message);
// console.log(message.length);
// console.log(message[0]);
// console.log(message.includes('h'));
// console.log(message.startsWith('h'));
// console.log(message.endsWith('i'));
// console.log(message.indexOf('i'));
// console.log(message.toUpperCase());
// console.log('This sentence takes \n two lines.');
// // String object
// const another = new String('hi');

// console.log(typeof another);
//===============
// //template literal

// const name = 'John';

// const message = 

// `Hi ${name},

// This is a message sent to you.

// Regards,
// `
//===========
//Date

// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11,9);
// now.setFullYear(2017);
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toISOString());
//============
// //excercise: address object

// let address = {
//   street: 'a',
//   city: 'b',
//   zipCode: 'c'
// };

// function showAddress(address) {
//   for (let key in address)
//     console.log(key, address[key]);
// }

// showAddress(address);

//============

// //excercise: factory function and constructor function

// let address = createAddress('a', 'b', 'c');

// console.log(address);

// //factory function
// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode
//   };
// }

// //constructor function

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// let anotherAddress = new Address('a', 'b', 'c');
// console.log(anotherAddress);
//=======
// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// let address3 = address1;
// console.log(areSame(address3, address1));

// //constructor function  
// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
//   return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode;
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

//===========

// let post = new Post('a', 'b', 'c');

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }


// console.log(post);
//=========

// //adding elements to an array.

// const numbers = [3, 4];

// //adding to the end
// numbers.push(5,6);
// console.log(numbers);

// //adding to the beginning

// numbers.unshift(1, 2);
// console.log(numbers);

// //add to the middle

// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);
//===========

// //finding elements(primitives)

// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf('a'));
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));
// console.log(numbers.indexOf(1, 2)); //searching from index 2

//============
// //finding elements(reference types)
// const courses = [
//   { id: 1, name: 'a'},//click shift+alt+down arrow will copy the current line to the line below.
//   { id: 1, name: 'a'},
// ]

// console.log(courses.includes( { id: 1, name: 'a'}));

// console.log(courses.find( 
//   function(course) {
//     return course.name === 'a';
//   }
// ));

// console.log(courses.findIndex( 
//   function(course) {
//     return course.name === 'a';
//   }
// ));
//============
// //arrow function

// const courses = [
//   { id: 1, name: 'a'},
//   { id: 1, name: 'a'},
// ];

// const course = courses.find(course => course.name === 'a');

// console.log(course);

//=========

// //removing elements

// const numbers = [ 1, 2, 3, 4];

// //removing the last element

// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// //removing the first element

// const first = numbers.shift();
// console.log(first);
// console.log(numbers);

// //removing element from the middle

// numbers.splice(1,1); //delete 1 element from index 1
// console.log(numbers);

//=========


