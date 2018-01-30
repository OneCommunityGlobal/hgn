import Ember from 'ember';
import ENV from '../config/environment';


export default Ember.Service.extend({

  self: this,

      getDashboardData(requestor) {


        let relativePath =  "/dashboard/" + requestor.requestorId;

        let data = null;
        let method = "get";

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
