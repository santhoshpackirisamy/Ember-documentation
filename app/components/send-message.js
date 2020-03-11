import Component from '@ember/component';

export default Component.extend({
    messaging: service(),
  actions: {
    sendMessage(messageType, messageText) {
      //send message here and return a promise
    }
  }
});