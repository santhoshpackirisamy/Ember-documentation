import EmberObject from '@ember/object';
import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { oneWay } from '@ember/object/computed';

let husband = EmberObject.create({
  pets: 0
});

let Wife = EmberObject.extend({
  pets: alias('husband.pets')                           //    two way binding
});

let wife = Wife.create({
  husband: husband
});

console.log(wife.get('pets')); // 0

// Someone gets a pet.
husband.set('pets', 1);
wife.get('pets'); // 1

// ***************************************

let user = EmberObject.create({
  fullName: 'Kara Gates'
});

let UserComponent = Component.extend({
  userName: oneWay('user.fullName')                     //    one way binding
});

let userComponent = UserComponent.create({
  user: user
});

// Changing the name of the user object changes
// the value on the view.
user.set('fullName', 'Krang Gates');
// userComponent.userName will become "Krang Gates"

// ...but changes to the view don't make it back to
// the object.
userComponent.set('userName', 'Truckasaurus Gates');
user.get('fullName'); // "Krang Gates"