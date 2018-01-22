import Ember from 'ember';

export default Ember.Service.extend({

  dataService: Ember.inject.service("datastore-service"),


  getAllProjects() {

    let relativePath = "/project";
    let data = "";
    let method = "get";

    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    console.log(request);
    return request;
  },

  getProjectById(projectId)
  {
    let relativePath = "/project/"+ projectId;
    let data = "";
    let method = "get";

    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    console.log(request);
    return request;
  },

  editProjectData(project, projectId) {
    let relativePath = "/project";
    let data = project;
    let method = "put";

    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;
  },
});
