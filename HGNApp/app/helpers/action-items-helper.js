import Ember from 'ember';

export function actionItemsHelper(params) {

  let notification = params[0];
  let customclass = "card-primary"; 
 
  if(notification.eventType === "Action Created") {customclass = "card-success";}
  if(notification.eventType === "Action Edited") {customclass = "card-warning";}
  if(notification.eventType === "Action Deleted") {customclass= "card-danger";}

 
  return customclass;
  

}

export default Ember.Helper.helper(actionItemsHelper);
