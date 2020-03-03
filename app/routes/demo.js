import EmberObject from '@ember/object';

const Person = EmberObject.extend({
  say(thing) {
    alert(`${this.name} says: ${thing}`);
  }
});


Person.reopenClass({        // ********** ReopenClass create a static method to class object *********************
  isPerson: true
});

Person.reopen({             // ********* Reopen create a method to all the instance of the object and not to Class object **********
  isPerson: false
});

let yehuda1 = Person.create();
let yehuda2 = Person.create();

console.log(Person.isPerson);    // true
console.log(yehuda1.isPerson);   // false
console.log(yehuda2.isPerson);   // false

