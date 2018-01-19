import Ember from 'ember';
import ENV from '../config/environment';


export default Ember.Service.extend({

  self: this,

      getDashboardData(requestor) {


        let relativePath =  "/dashboard1/" + requestor.requestorId;

        let data = null;
        let method = "get";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;


  },

  getUserProfileData(requestor) {

    let relativePath =  "/userprofile/" + requestor.requestorId;
    let data = "";
    let method = "get";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;

  },
  saveUserProfileData(user, userId) {

    let relativePath =  "/userprofile/" + userId;
    let data = user;
    let method = "put";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;
  },

  getProjectData() {

    let relativePath =  "/project" ;

    let data = "";
    let method = "get";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;
  },

  saveProjectData(project, projectId) {
    let relativePath =  "/project" ;
    let data = project;
    let method = "put";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;
  },

  createEmberrequestObject(relativePath, data, method) {
    return Ember.$.ajax({
      "url": ENV.webServer + relativePath,
      "data": data,
      "method": method,
      "dataType": "JSON",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", localStorage.getItem(ENV.TOKEN_KEY));
      }
    });

  }

});
