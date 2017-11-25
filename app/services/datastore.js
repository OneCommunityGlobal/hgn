import Ember from 'ember';

export default Ember.Service.extend({

    
    getDashboardData(){
        //let data = Ember.$.getJSON('/data/data.json');

        let data = Ember.$.ajax("http://localhost:4500/api/dashboard",
        {
            "type" : "get"
            //"dataType":"JSON"     
        }  )
        console.log(data);
       
            return data;
}
               
    
});
