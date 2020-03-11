import Component from '@ember/component';

export default Component.extend({
  actions: {
    launchConfirmDialog() {
      this.set('confirmShown', true);
    },

    submitConfirm() {
      //call the onConfirm property to invoke the passed in action
      let promise = this.onConfirm(this.confirmValue);
      promise.then(() => {
        this.set('confirmShown', false);
      });
    },

    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});