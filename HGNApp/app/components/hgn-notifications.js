import Ember from 'ember';

export default Ember.Component.extend({

    DataService : Ember.inject.service('datastore-service'),
    
    actions:{
        deleteNotification(notification)
        {
           
            this.get('notifications').removeObject(notification);
            this.get('DataService').deleteNotification(notification._id);
            alert('deleted');    
    
        }
    }
});
