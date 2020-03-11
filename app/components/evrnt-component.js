import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['draggable'],
  draggable: 'true',

  dragOver() {
    return false;
  },

  drop(event) {
    let id = event.dataTransfer.getData('text/data');
    this.dropAction(id);
  }   
});
