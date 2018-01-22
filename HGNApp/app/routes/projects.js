import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {

    model: function() {

        alert("in model hook")       ;
        return this.get('projectService').getAllProjects();
      
    }
});
