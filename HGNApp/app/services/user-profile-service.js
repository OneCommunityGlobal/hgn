import Ember from 'ember';


export default Ember.Service.extend({

  dataService: Ember.inject.service('datastore-service'),

  getAllUserProfiles() {
    let relativePath = "/userprofile";
    let data = "";
    let method = "get";

    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;
  },
  getUserProfileData(requestor) {

    let relativePath = "/userprofile/" + requestor.requestorId;
    let data = "";
    let method = "get";

    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;

  },
  editUserProfileData(user, userId) {

    let relativePath = "/userprofile/" + userId;
    let data = user;
    let method = "put";

    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;
  },
});
