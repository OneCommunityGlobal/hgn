import Ember from 'ember';

export default Ember.Component.extend({
  timeDisplay: Ember.computed('totalSeconds', {
    get(key) {
      console.log('get')
      let dur = moment.duration(this.get('totalSeconds'), 's') || 0;
      return `${dur.toHours()}:${dur.toMinutes}:${dur.toSeconds}`;
    },
    set(key, value) {
      let dur = moment.duration()
      if (value.indexOf(':') > 0) {
        dur = moment.duration(`'${value}'`, 'h');
      } else {
        dur = moment.duration(value, 'h');
      }

      this.set('totalSeconds', dur.toSeconds());
    }
  }),
  actions: {
    doSave(d) {
      //d.reject();
      this.get('model').save();
      d.resolve();
    },
    doAfterClose() {
      //
    },
    doClose(d) {
    //  if(confirm('Please confirm...')) {
    if(true){
        d.resolve();
      } else {
        d.reject();
      }
    }
  }

});
