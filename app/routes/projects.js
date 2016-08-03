import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return {
      projectsData:{
        projectList:[
            {
              name:"Project 1",
              id:101
            },
            {
              name:"Project 2",
              id:102
            },
            {
              name:"Project 3",
              id:103
            },
            {
              name:"Project 4",
              id:104
            }
        ],
        taskList:[
            {
              name:"Task 1",
              id:101
            },
            {
              name:"Task 2",
              id:102
            },
            {
              name:"Task 3",
              id:103
            },
            {
              name:"Task 4",
              id:104
            },
            {
              name:"Task 5",
              id:101
            },
            {
              name:"Task 6",
              id:102
            },
            {
              name:"Task 7",
              id:103
            },
            {
              name:"Task 8",
              id:104
            },
            {
              name:"Task 9",
              id:101
            },
            {
              name:"Task 10",
              id:102
            },
            {
              name:"Task 11",
              id:103
            },
            {
              name:"Task 12",
              id:104
            },
            {
              name:"Task 13",
              id:101
            },
            {
              name:"Task 14",
              id:102
            },
            {
              name:"Task 15",
              id:103
            },
            {
              name:"Task 16",
              id:104
            },
            {
              name:"Task 1",
              id:101
            },
            {
              name:"Task 2",
              id:102
            },
            {
              name:"Task 3",
              id:103
            },
            {
              name:"Task 4",
              id:104
            }
        ]
      }
    }
  }

});
