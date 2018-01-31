import Clock from 'ember-cli-clock/services/clock';

export default Clock.extend({
  interval: 1000,
  intervalTime: 1000,
  second: 0,
  minute: 0,
  five: 0,
  quarter: 0,
  hour: 0,
  started: false,

  startClock(){
    this.started = true;
    this.start();
  },

  stopClock(){
    this.started = false;
    this.stop();
  },

  reset() {
    this.stop();
    this.started = false;
    this.setProperties({second: 0, minute: 0, five: 0, quarter: 0, hour: 0});
  },


  timeChange: Ember.observer('time', function() {
    if(this.started){
      this.tick();
    }
  }),

  tick() {
    var second = this.incrementProperty('second');

    if (second && (second % 60) === 0) {
      var minute = this.incrementProperty('minute');
      this.setProperties({second: 0});

      if (minute !== 0) {
        if ((minute % 5) === 0) {
          this.incrementProperty('five');
        }

        if ((minute % 15) === 0) {
          this.incrementProperty('quarter');
        }

        if ((minute % 60) === 0) {
          this.incrementProperty('hour');
          this.setProperties({minute: 0});
        }
      }
    }
  }
});
