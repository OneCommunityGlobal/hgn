import Ember from 'ember';

export default Ember.Route.extend({
    selectedUserName:"Jae",
    firstName:"Jae",
    lastName:"sabol",
    email:"nl@gmail.com",
    contact:"999-999-9999",
    role:"Admin",

    model(){
    return {
        UserDetails:  [
            {
                userName:"Jae",
                firstName:"Jae",
                lastName:"sabol",
                email:"nl@gmail.com",
                contact:"999-999-9999",
                role:"Admin"

            },
            {
                userName:"SM",
                firstName:"Sowmya",
                lastName:"Manohar",
                email:"Sowmi.sarojini@gmail.com",
                contact:"999-999-9999",
                role:"Volunteer"

            },
             {
                userName:"AK",
                firstName:"Anil kumar",
                lastName:"Malla",
                email:"Anil@gmail.com",
                contact:"999-999-9999",
                role:"Volunteer"

            },
             {
                userName:"JL",
                firstName:"Jono",
                lastName:"Lewis",
                email:"nl@gmail.com",
                contact:"999-999-9999",
                role:"Volunteer"

            }

        ]
        
    }
},
actions:{
    
    editRow(user){
        
          this.set('selectedUserName',user.userName);
      
    }
}

});
