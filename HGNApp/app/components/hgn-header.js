import Ember from 'ember';

export default Ember.Component.extend({

    showNotifications : false,
    
    dataService : Ember.inject.service('datastore-service'),

    deleteNotification(notification)
    {
        alert("inside action");
        this.get('notifications').removeObject(notification);
        this.get('dataService').deleteNotification(notification._id);
        alert('deleted');


    },

    actions:{

        readNotification(){

            Ember.$(".badge-notify").popover({
                html: true,
                title: "Notifications",
                content : () => {
                    let note =this.get('notifications');
                    
                    if(note.length <1)
                    {
                        return;
                    }

                    let value ="<ul style='list-style: none;'>";

                    note.forEach(element => {

                        value = value + "<li class = 'alert-li'>" + element.message + "</li>" + "<button class = 'btn-danger btn-xs' onclick = deleteNotification(" + ") >Mark Read</button>";
                        
                    });

                    value = value+ "</ul>";

                    return value;
                   
                },
                placement: "bottom"
            });



            if(this.get('notifications.length') >0)
            {   
            this.set('showNotifications', true);
            }
            this.sendAction('gotoTimeLog');
        },

      



    }

});
