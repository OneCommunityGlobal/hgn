import Ember from 'ember';

export default Ember.Service.extend({
    dataService: Ember.inject.service('datastore-service'),

    getDashboardData(requestor) {

        let relativePath =  "/dashboard/" + requestor.requestorId;
        let data = null;
        let method = "get";
    let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
    return request;
  },

  getWeeklyEffort(requestor)
  {
    let relativePath =  "/dashboard/weeklydata/" + requestor.requestorId;
    let data = null;
    let method = "get";
let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
return request;

  },

  getMonthlyEffort(requestor)
  {
    let relativePath =  "/dashboard/monthlydata/" + requestor.requestorId;
    let data = null;
    let method = "get";
let request = this.get('dataService').createEmberrequestObject(relativePath, data, method);
return request;

  }

    
});
