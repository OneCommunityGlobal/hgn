import Ember from 'ember';

export default Ember.Controller.extend({

  self: this,
  projectName: "",
  isUserNotAdministrator: Ember.computed('userrole', function(){
    let userrole = this.get('userrole');
    return userrole === "Administrator" ? false : true;
  }),

  actions: {
    addProject(){
        let projectName = this.get('projectName');
        this.get('model.projectName').pushObject(projectName);
        this.set('projectName',projectName);
  }
}

});
