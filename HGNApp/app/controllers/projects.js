import Ember from 'ember';
import UserProfileValidationMixin from '../mixins/user-profile-validation-mixin';

export default Ember.Controller.extend(UserProfileValidationMixin, {

  self: this,

  isUserNotAdministrator: Ember.computed('userrole', function() {

    let userrole = this.get('userrole');
    return userrole === "Administrator" ? false : true;

  }),

  actions: {

    addProject() {
      let projectId = this.get('projectId');
      let project = this.get('model');

      this.validate()
        .then(() => {
          this.get('DataService').saveProjectData(project, projectId)
            .then(alert("Saved"));
        })
        .catch(console.log(this.get("errors")));

    },
  }
});
