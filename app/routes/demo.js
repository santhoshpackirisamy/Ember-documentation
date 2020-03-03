import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  todos: null,

  init() {
    this._super(...arguments);
    this.set('todos', A([
      EmberObject.create({ title: 'Buy food', isDone: true }),
      EmberObject.create({ title: 'Eat food', isDone: false }),
      EmberObject.create({ title: 'Catalog Tomster collection', isDone: true }),
    ]));
  },

  titles: computed('todos.[]', function() {             // *********** [] - detect the inc or dec or replaced in array value *************
    return this.todos.mapBy('title');
  })
});


export default Component.extend({
  todos: null,

  init() {
    this._super(...arguments);
    this.set('todos', A([
      EmberObject.create({ isDone: true }),
      EmberObject.create({ isDone: false }),
      EmberObject.create({ isDone: true }),
    ]));
  },

  incomplete: computed('todos.@each.isDone', function() {   // *********** @ - detect the changes in array value *************
    let todos = this.todos;
    return todos.filterBy('isDone', false);
  })
});


incomplete: computed('todos.[]', 'todos.@each.isDone', function() {
...
})


// *************************  macros ****************

incomplete: filterBy('todos', 'isDone', false)  // @