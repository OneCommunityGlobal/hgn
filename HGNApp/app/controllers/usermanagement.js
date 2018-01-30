import Ember from 'ember';

export default Ember.Controller.extend({
    selectedOption: null,

    actions: {
        setSelection: function (selected) {
            this.set('selectedOption', selected);
        }
    }
});