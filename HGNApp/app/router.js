import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects');
  this.route('reports');
  this.route('dashboard');
  this.route('profile');
  this.route('timelog');
  this.route('myaccount');
  this.route('login');
  this.route('user', { path:'/usermanagement' });
  this.route('admin');
});

export default Router;
