import Ember from 'ember';

export default Ember.Component.extend({

    
    init(){
        this._super(...arguments);

        let user = this.get('loggedinUser');
        
     this.get('DataService').getUnreadNotifications(user)
     .then(results => { this.set('notifications', results);});
    },
    
    actions:{
        deleteNotification(notification)
        {
           
            this.get('notifications').removeObject(notification);
            this.get('DataService').deleteNotification(notification._id);
            alert('deleted');    
    
        }
    }
});
