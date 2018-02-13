import Ember from 'ember';

export function checkUserisloggedinUser(params/*, hash*/) {

  let teamMember = params[0];
  let loggedinUser = params[1];
  

  return (teamMember._id === loggedinUser.requestorId)? true : false;

  //return params;
}

export default Ember.Helper.helper(checkUserisloggedinUser);
