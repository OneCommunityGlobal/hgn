import Ember from 'ember';

export default Ember.Component.extend({
    newactionitem : {},
    addnewactionitem : false,
    DataService : Ember.inject.service('datastore-service'), 
    forUser : "",
    newAIdescription : "",
    newdescription : "",
    
  

    actions: {

        getActionItemsForUser()
        {
            
            let requestor = {"requestorId" : this.get('forUser')};
            this.get('DataService').getActionItems(requestor)
            .then(results => {
                this.set('actionItems', results);
            })
        },

        editActionItem(actionItem){
            let editedactionitem = {};

            editedactionitem._id = actionItem._id;
            editedactionitem.description = this.get('newdescription');
            editedactionitem.assignedTo = actionItem.assignedTo;
            editedactionitem.createdBy = actionItem.createdBy;

           
            this.get('DataService').editActionItem(editedactionitem)
            

        }
        ,
        deleteActionItem(actionItem){

       

            this.get('actionItems').removeObject(actionItem);
            this.get('DataService').deleteActionItem(actionItem);

        },

        createActionItem()
        {
            let newActionItem = {};

            let assignedTo = this.get('forUser');

            if(!assignedTo)
            {
                assignedTo = this.get('loggedinUser.requestorId');
            }

            newActionItem.assignedTo = assignedTo;
            newActionItem.description = this.get('newAIdescription');
            
            this.get('DataService').createActionItem(newActionItem)
            .then(result => {                
                this.get('actionItems').addObject(result);
                this.set('newAIdescription', "");
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
