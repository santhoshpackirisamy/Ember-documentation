//In order for Ember to observe when you make a change to an enumerable, you need to use special methods that MutableArray provides. For example, if you add an element to an array using the standard JavaScript method push(), Ember will not be able to observe the change, but if you use the enumerable method pushObject(), the change will propagate throughout your application.

//pop           	popObject
//push	            pushObject
//reverse	        reverseObjects
//shift	            shiftObject
//unshift	        unshiftObject


import { A } from '@ember/array';

let animals = A(['rooster', 'pig']);

console.log(animals.get('lastObject'));
//=> "pig"

animals.pushObject('peacock');

animals.get('lastObject');


let words = ['goodbye', 'cruel', 'world'];

let emphaticWords = words.map(item => `${item}!`);

console.log(emphaticWords);