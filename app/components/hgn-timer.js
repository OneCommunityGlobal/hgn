import Ember from 'ember';

export default Ember.Component.extend({
  clock: Ember.inject.service('hgn-clock'),
  iso: Ember.computed('clock.second', function() {
    console.log(this.get('clock.second'));
    return this.get('clock.minute');
  }),
  status: 0,
  /*
    status codes
    0 -- start
    1 -- pause
  */
  actionText: "Start",
  stopDisabled: "disabled",
  actions: {
        timerAction: function() {
            if(this.get('status') == 0)
            {
              this.get('clock').start();
              this.setProperties({status:1, actionText: "Pause", stopDisabled:""});
            }
            else if(this.get('status') == 1)
            {
              this.get('clock').stop();
              this.setProperties({status:0, actionText: "Start"});
            }

        },
        resetTimer: function()
        {
            this.get('clock').reset();
            this.setProperties({status:0, actionText: "Start", stopDisabled:"disabled"});
          
        },
        stopTimer: function()
        {

        }
      }
});
