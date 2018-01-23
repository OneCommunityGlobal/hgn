import Ember from 'ember';

export default Ember.Controller.extend({

  self: this,
  newTask: {
    Description: ""
  },
  addTask: false,
  newProjectName: "",
  isUserNotAdministrator: Ember.computed('userrole', function() {
    let userrole = this.get('userrole');
    return userrole === "Administrator" ? false : true;
  }),

  actions: {

    addNewTask() {
      this.set('addTask', true);
      this.get('model.tasks').addObject(this.get('newTask'));
      this.set('newTask', {});
    },
    addProject() {
      alert("Saved!");
    },

    isActiveToggled(choice){
      console.log(choice);
      this.set('model.isActive', choice);
    }
  }

});
