import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    doSave(d) {
      //d.reject();
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
