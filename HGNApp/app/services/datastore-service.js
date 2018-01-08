import Ember from 'ember';
import ENV from '../config/environment';


export default Ember.Service.extend({

    self: this,

      getDashboardData() {

        let url = ENV.webServer + "/dashboard";
        let data = null;
        let method = "get";

        let request = this.createEmberrequestObject(url, data, method);
        return request;

      
      },

      getUserProfileData(requestor) {

        let url = ENV.webServer + "/userprofile/"+  requestor.requestorId;
        let data = "";
        let method = "get";

        let request = this.createEmberrequestObject(url, data, method);
        return request;

      },
      saveUserProfileData(user, userId) {

        let url = ENV.webServer + "/userprofile/" + userId;
        let data = user;
        let method = "put";

        let request = this.createEmberrequestObject(url, data, method);
        return request;
      },

      createEmberrequestObject(url, data, method) {
        return Ember.$.ajax({
            "url" : url,
            "data" : data,
            "method" : method,
            "dataType": "JSON",           
             beforeSend: function (xhr) {
              xhr.setRequestHeader("Authorization", localStorage.getItem(ENV.TOKEN_KEY));
            }
          });

        }

      });
