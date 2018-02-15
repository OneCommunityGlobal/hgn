import Ember from 'ember';

export default Ember.Service.extend({
    dataService: Ember.inject.service('datastore-service'),

    getUserProjects(requestor) {
        let relativePath = "/TimeEntry/user/projects/" + requestor.requestorId;
        let data = "";
        let method = "get";
    
        let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
        return request;
      },

      postTimeEntry(timeEntry)
      {
        let relativePath = "/TimeEntry";
        let data = timeEntry;
        let method = "post";

        
        let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
        return request;

      }
});
