import subtract, { square, add } from './utils';
import isSenior, { isAdult, canDrink } from './person';

console.log('app.js is running !');

console.log('square', square(5));
console.log('add', add(200, 25));
console.log('subtract', subtract(100, 77));
console.log('isAdult', isAdult(30));
console.log('canDrink', canDrink(30));
console.log('isSenior', isSenior(63));
