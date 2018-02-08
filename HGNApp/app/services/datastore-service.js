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



  createActionItem(actionItem)
  {
    let relativePath =  "/actionItem" ;

        let data = actionItem;
        let method = "post";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;

  },
  getActionItems(requestor)
  {
    let relativePath =  "/actionItem/user/" + requestor.requestorId;

        let data = null;
        let method = "get";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;

  },
  
  editActionItem(actionItem)
  {
    let relativePath =  "/actionItem/" + actionItem._id;

    let data = actionItem;
    let method = "put";

let request = this.createEmberrequestObject(relativePath, data, method);
return request;

  },

  deleteActionItem(actionItemId)
  {
    let relativePath =  "/actionItem/"+ actionItemId ;

        let data = null;
        let method = "delete";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;

  },


  getUnreadNotifications(requestor)
  {
    let relativePath =  "/notification/user/" + requestor.requestorId;

        let data = null;
        let method = "get";

    let request = this.createEmberrequestObject(relativePath, data, method);
    return request;

  },

  deleteNotification(id)
  {
    let relativePath =  "/notification/" + id;

        let data = null;
        let method = "delete";

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
