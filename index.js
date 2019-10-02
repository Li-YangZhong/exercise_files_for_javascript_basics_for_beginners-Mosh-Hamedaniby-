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
console.log(typeof NaN);

const output = fizzBuzz(150);
console.log(output);

function fizzBuzz(input) {
  if( typeof input !== 'number')
    return NaN;

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

  if( input % 3 === 0) {
    return 'Fizz';
  }

  if( input % 5 === 0) {
    return 'Buzz';
  }

  return input;
}
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    }

    const points = Math.floor((speed - speedLimit) /kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points', points);
}

checkSpeed(180);
