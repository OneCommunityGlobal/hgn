import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  showMyModal: false,
  newTimelogModel: null,

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
              this.get('clock').start();
              this.setProperties({status:1, actionText: "Stop",actionIcon:"stop", stopDisabled:""});
            }
            else if(this.get('status') === 1)
            {
              this.get('clock').stop();
              this.setProperties({status:0, actionText: "Start", actionIcon:"play"});
            }

        },
        resetTimer: function()
        {
            this.get('clock').reset();
            this.setProperties({status:0, actionText: "Start",actionIcon:"play", stopDisabled:"disabled"});

        },
        toggleShow() {
            let store = this.get('store');
            this.set('newTimelogModel', store.createRecord('timelog'));
            this.set('showMyModal', !this.get('showMyModal'));
        }

      }
});
