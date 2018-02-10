import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects');
  this.route('dashboard');
  this.route('timelog');
  this.route('login');
  this.route('myprofile');
  this.route('usermanagement');
  this.route('actionitems');
  this.route('badges');
  this.route('mynotifications');
  this.route('project', function() {
    this.route('viewproject',{path: '/:projectId'});
    });
  
});

export default Router;
