import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  login: service(),

  actions: {
    userDidDeleteAccount() {
      this.login.deleteUser();
      this.didDelete(this.login.currentUserObj);
    }
  }
});