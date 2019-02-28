//app/controllers/index.js
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Coming Soon',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    async saveInvitation() {
      const email = this.emailAddress;

      const newInvitation = this.store.createRecord('invitation', { email });

      const response = await newInvitation.save();
      this.set(
        'responseMessage',
        `Thank you! We saved your email address with the following id:
        ${response.id}`,
      );
      this.set('emailAddress', '');
    },
  },
});
