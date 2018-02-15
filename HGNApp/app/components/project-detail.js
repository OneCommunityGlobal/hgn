import Ember from 'ember';

export default Ember.Component.extend({
  this._super(...arguments);
 },

  projectService: Ember.inject.service('project-service'),
  isProjectDetail: false,

  actions: {
    toggleProjectDetail() {
      this.toggleProperty('isProjectDetail');
    },
    destroyProject(project) {
      this.get('projectService').removeObject(project);
      this.get('projectService').deleteProject(project);
    },
    postChanges() {
      let projectId = this.get('projectId');
      let project = this.get('projectService');
      this.get('projectService').editProjectData(project, projectId);
    },
    addNewTask() {
      this.get('projectService.tasks').addObject(this.get('task'));
      this.set('task', {});
    },
    cancelTask(task) {
      this.get('projectService.tasks').removeObject(task);
    },
  }
});
