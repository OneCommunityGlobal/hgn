import Ember from 'ember';

export default Ember.Controller.extend({

    newactionitem : {},
    addnewactionitem : false,
   

    actions: {

        editactionitem(actionitem){

            alert("clicked");
            this.get('DataService').editActionItem(actionitem);

        }
        ,
        deleteactionitem(actionitem){

            this.get('model').removeObject(actionitem);
            this.get('DataService').deleteActionItem(actionitem._id);

        },

        createActionItem()
        {
            
            this.get('DataService').createActionItem(this.get('newactionitem'))
            .then(results => {
                this.get('model').addObject(results);  
                this.set('newactionitem', {})              
      
            });

        },
        showForm()
        {
            this.set('addnewactionitem', true);
        },
        selectAssignee(assignee)
        {
            this.set('newactionitem.assignedTo', assignee._id);

        }

    }
});
