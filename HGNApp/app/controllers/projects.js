import Ember from 'ember';

export default Ember.Controller.extend({

  self: this,

  newProject: {
    projectName : "",
    tasks: [],
    isActive: true
  },
  task: {
    Description: ""
  },
  isUserNotAdministrator: Ember.computed('userrole', function() {
    let userrole = this.get('userrole');
    return userrole === "Administrator" ? false : true;
  }),

  actions: {
    addNewTask() {
      this.get('newProject.tasks').addObject(this.get('task'));
      this.set('task', {});
    },
    cancelTask(task) {
      this.get('newProject.tasks').removeObject(task);
    },

    addNewProject() {
      this.get('model').addObject(this.get('newProject'));
      let project = this.get('newProject');
      this.get('projectService').postProject(project);
      this.set('newProject', {});
    },
    destroyProject(project) {
      this.get('model').removeObject(project);
      this.get('projectService').deleteProject(project);
    },
    postChanges() {
      let projectId = this.get('projectId');
      let project = this.get('model');
      this.get('projectService').editProjectData(project, projectId);
    }
  }

});
