import Ember from 'ember';

export default Ember.Component.extend({

    showNotifications : false,
    
    dataService : Ember.inject.service('datastore-service'),

    actions:{

        readNotification(){

            Ember.$(".badge-notify").popover({
                html: true,
                title: "Notifications",
                content : function(){
                    return "Hello"
                },
                placement: "bottom"
            });



            if(this.get('notifications.length') >0)
            {   
            this.set('showNotifications', true);
            }
            this.sendAction('gotoTimeLog');
        },

        deleteNotification(notification)
        {
            this.get('notifications').removeObject(notification);
            this.get('dataService').deleteNotifications(notification._id);
            alert('deleted')


        }



    }

});
