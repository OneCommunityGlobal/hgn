import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

    notes : "",
    dateofWork : "",
    taskhours : "",
    taskminutes : "",
    taskseconds : "",
    

    init()
    {
        this._super(...arguments);
        let user = this.get('loggedinUser');

         this.get('timeEntryService').getUserProjects(user)
        .then(results => {this.set('projects', results);});

    },

    actions:{
        submitTimeEntry(){
            let toastr = this.get('ToastorService');

            let timeentry = {};
            
            let hours = (!!this.get('taskhours'))? this.get('taskhours') : "00";
            let minutes = (!!this.get('taskminutes'))? this.get('taskminutes') : "00";
            let seconds =  (!!this.get('taskseconds'))? this.get('taskseconds') : "00";

            let timespent = hours + ":" + minutes + ":" + seconds;
            let dateofWork =moment(this.get('dateofWork')).format('YYYY-MM-DD');    
            timeentry.personId = this.get('loggedinUser.requestorId');
            timeentry.projectId = this.get('forprojectId');
            timeentry.taskId = this.get('fortaskId');
            timeentry.dateofWork = dateofWork;
            timeentry.timeSpent = timespent;
            timeentry.notes = this.get('notes');
            this.get('timeEntryService').postTimeEntry(timeentry)
            .then(results => {
                toastr.success(results, 'Time Entry Saved');
            }, error => {toastr.warning('Error!!', error);})
           


        }

    }

});
