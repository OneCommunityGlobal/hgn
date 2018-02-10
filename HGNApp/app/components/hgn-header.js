import Ember from 'ember';

export default Ember.Component.extend({

    showNotifications : false,

      actions:{

        readNotification(){
                        this.sendAction('readNotification');
        },





    }

});
