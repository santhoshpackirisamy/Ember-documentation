import { A } from '@ember/array';
import EmberObject from '@ember/object';



const Person = EmberObject.extend({  // *********** crete ember object ***************
  say(thing) {
    alert(`${this.name} says: ${thing}`);
  }
});

const Soldier = Person.extend({    // *********** extend object for subclass ****************
  say(thing) {
    // this will call the method in the parent class (Person#say), appending
    // the string ', sir!' to the variable `thing` passed in
    this._super(`${thing}, sir!`);
  }
});

let yehuda = Soldier.create({  //  ****** create ember object **************
  name: 'Yehuda Katz'
});

yehuda.say('Yes'); // alerts "Yehuda Katz says: Yes, sir!"



 Person = EmberObject.extend({
  init() {                                            // ******** initialize during instance creation ************
    this.set('shoppingList', A(['eggs', 'cheese']));  // ******** intialize array/object in init otherwise it will occur common to instance *****
  }
});

Person.create({
  name: 'Stefan Penner',
  addItem() {
    this.shoppingList.pushObject('bacon');
  }
});

Person.create({
  name: 'Robert Jackson',
  addItem() {
    this.shoppingList.pushObject('sausage');
  }
});

// Stefan ['eggs', 'cheese', 'bacon']
// Robert ['eggs', 'cheese', 'sausage']