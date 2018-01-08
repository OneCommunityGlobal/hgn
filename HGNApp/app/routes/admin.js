import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return [{
      name: "Project 1",
      id: 101,
      isActive: true,
      tasks: [
        "task 1", "task 2", "task 3"
      ]
    }, {
      name: "Project 2",
      id: 102,
      isActive: true,
      tasks: [
        "task 1", "task 2", "task 3"
      ]
    }, {
      name: "Project 3",
      id: 103,
      isActive: true,
      tasks: [
        "task 1", "task 2", "task 3"
      ]
    }, {
      name: "Project 4",
      id: 104,
      isActive: true,
      tasks: [
        "task 1", "task 2", "task 3", "task 4"
      ]
    }, {
      name: "Project 5",
      id: 103,
      isActive: true,
      tasks: [
        "task 1", "task 2", "task 3"
      ]
    }, {
      name: "Project 6",
      id: 103,
      isActive: true,
      tasks: [
        "task 1", "task 2", "task 3"
      ]
    }, {
      name: "Project 7",
      id: 103,
      isActive: true,
      tasks: [
        "task 1", "task 2", "task 3"
      ]
    }]
  }
});
