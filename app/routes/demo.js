import EmberObject, { computed } from '@ember/object';

const Person = EmberObject.extend({
  // these will be supplied by `create`
  firstName: null,
  lastName: null,
  age: null,
  country: null,

  fullName: computed('firstName', 'lastName', function() {                     // ***************  compute during the call ************
    console.log('compute fullName');    // track when the property recomputes
    return `${this.firstName} ${this.lastName}`;
  }),
    
  description: computed('fullName', 'age', 'country', function() {             // ***************  dynamic update fulname value ***********
    return `${this.fullName} Age: ${this.age}; Country: ${this.country}`;
  })

});

let ironMan = Person.create({
  firstName: 'Tony',
  lastName:  'Stark'
});

console.log(ironMan.fullName);                       // 'compute fullName'
ironMan.set('firstName', 'Bruce')                                           // *****************  only use set to change ******************** 

console.log(ironMan.fullName);                       // 'compute fullName'
console.log(ironMan.fullName);                       // no console output since dependencies have not changed



const Home = EmberObject.extend({
  location: {
    streetName: 'Evergreen Terrace',
    streetNumber: 742
  },

//  address: computed('location', function() {                                
//  address: computed('location.{streetName,streetNumber}', function() {    
  address: computed('location.streetName', 'location.streetNumber', function() {
    return `${this.location.streetNumber} ${this.location.streetName}`;    // ************* compute for object properties *************
  })
});

let home = Home.create()

console.log(home.address) // 742 Evergreen Terrace
home.set('location.streetNumber', 744)
console.log(home.address) // 744 Evergreen Terrace


let captainAmerica = Person.create({
  firstName: 'Steve',
  lastName: 'Rogers',
  age: 80,
  country: 'USA'
});


console.log(captainAmerica.get('description')); // "Steve Rogers; Age: 80; Country: USA"

captainAmerica.set('firstName', 'William');

console.log(captainAmerica.description); // "William Rogers; Age: 80; Country: USA"



const Persons = EmberObject.extend({
  firstName: null,
  lastName: null,

  fullName: computed('firstName', 'lastName', {
    get(key) {
      return `${this.firstName} ${this.lastName}`;
    },
    set(key, value) {                                   // *********** set value by compute ************
      let [firstName, lastName] = value.split(/\s+/);
      this.set('firstName', firstName);
      this.set('lastName',  lastName);
      return value;
    }
  })
});


let captain = Persons.create();
captain.set('fullName', 'William Burnside');
console.log(captain.firstName); // William
console.log(captain.lastName); // Burnside


//  ************************* Computed property macros ************************

//
//  isIronManLongWay: computed('fullName', function() {
//    return this.fullName === 'Tony Stark';
//  }),
//
//  isIronManShortWay: equal('fullName', 'Tony Stark')