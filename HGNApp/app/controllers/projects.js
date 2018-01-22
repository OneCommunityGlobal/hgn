import Ember from 'ember';

export default Ember.Controller.extend({

  self: this,
  newTask: "",
  addTask: false,
  projectName: "",
  isUserNotAdministrator: Ember.computed('userrole', function() {
    let userrole = this.get('userrole');
    return userrole === "Administrator" ? false : true;
  }),

  actions: {

    addNewTask() {
      this.set('addTask', true);
      this.get('model.tasks').addObject(this.get('newTask'));
      this.set('newTask', '');
    },
    addProject() {
      this.get('model.projectName').addObject(this.get('projectName'));
      this.set('model.projectName', '');
    },

    isActiveToggled(choice){
      console.log(choice);
      this.set('model.isActive', choice);
    }
  }

});
