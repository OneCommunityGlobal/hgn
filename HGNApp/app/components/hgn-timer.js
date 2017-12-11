import Ember from 'ember';

export default Ember.Component.extend({
  showMyModal: false,

  clock: Ember.inject.service('hgn-clock'),
  seconds: Ember.computed('clock.second', function() {

      var second = this.get('clock.second');
      if(second<10) {
        second = "0" + second;
      }
      return second;
  }),
  minutes: Ember.computed('clock.second', function() {

    var minute = this.get('clock.minute');
    if(minute<10) {
      minute = "0"+minute;
    }
    return minute;
  }),
  hours: Ember.computed('clock.hour', function() {
    var hour = this.get('clock.hour');
    if(hour<10) {
      hour = "0"+hour;
    }
    return hour;
  }),
  status: 0,
  /*
    status codes
    0 -- start
    1 -- pause
  */
  actionText: "Start",
  stopDisabled: "disabled",
  actionIcon : "play",
  actions: {
        timerAction: function() {
            if(this.get('status') === 0)
            {
              this.get('clock').startClock();
              this.setProperties({status:1, actionText: "Stop",actionIcon:"stop", stopDisabled:""});
            }
            else if(this.get('status') === 1)
            {
              this.get('clock').stopClock();
              this.setProperties({status:0, actionText: "Start", actionIcon:"play"});
            }

        },
        resetTimer: function()
        {

            this.get('clock').reset();
            this.setProperties({status:0, actionText: "Start",actionIcon:"play", stopDisabled:"disabled"});

        },
        toggleShow() {
            this.set('showMyModal', !this.get('showMyModal'));
        }

      }
});
