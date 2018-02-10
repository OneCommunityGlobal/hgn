import Ember from 'ember';

export default Ember.Controller.extend({

    
    valueClass : Ember.computed('model.@each',function(){

       return this.get('model').map(function(notification){

               
        if(notification.eventType === "Action Created") {return "card-success";}
        if(notification.eventType === "Action Edited") {return "card-warning";}
        if(notification.eventType === "Action Deleted") {return "card-danger";}
        return "card-primary";
       })
    }),
     
    actions :
    {
        deleteNotification(notification)
        {
           
            this.get('model').removeObject(notification);
            this.get('DataService').deleteNotification(notification._id);
            alert('deleted');    
    
        },
    }
});
