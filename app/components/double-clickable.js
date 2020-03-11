import Component from '@ember/component';

export default Component.extend({
  doubleClick() {
    alert('DoubleClickableComponent was clicked!');
      return false;
  }    
});
