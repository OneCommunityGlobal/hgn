import Ember from 'ember';

export default Ember.Component.extend({
    
    leaderboarddata : "",
    someprop : "",
    datastore : Ember.inject.service('datastore'),
    init(){
        this._super(...arguments);
        this.get('datastore').getDashboardData().done(function(results) {this.leaderboarddata = results; });
        this.someprop  = "123";
            }



});
