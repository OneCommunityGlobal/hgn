import Ember from 'ember';

export default Ember.Component.extend({
  timeDisplay: Ember.computed('totalSeconds', {
    get(key) {
      console.log('get totalSeconds');
      let dur = moment.duration(this.get('totalSeconds'), 's') || 0;
      return `${dur.toHours()}:${dur.toMinutes}:${dur.toSeconds}`;
    },
    set(key, value) {
      console.log('set totalSeconds');
      let dur = moment.duration();
      if (value.indexOf(':') > 0) {
        dur = moment.duration(`'${value}'`, 'h');
      } else {
        dur = moment.duration(value, 'h');
      }

      this.set('totalSeconds', dur.toSeconds());
    }
  }),
  actions: {
    saveTimelog() {
      let onSuccess = () => this.set('isVisible', false);
      let onFail = (timelog) => console.error(timelog);
      console.log(this.get('model'))
      this.get('model').save().then(onSuccess).catch(onFail);
    }
  }

});
