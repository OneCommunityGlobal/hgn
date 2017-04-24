import DS from 'ember-data';

export default DS.Model.extend({
    /*

    {	"_id":"58f9627351124b69942c7b6f",
    	"name":"Anil Kumar, Malla",
    	"phone":"9999999999",
    	"email":"anil.amf237@gmail.com",
    	"about":"A moment of Silence!",
    	"linkedin":"https://www.linkedin.com/in/ak-malla",
    	"facebook":"https://www.linkedin.com/in/ak-malla",
    	"avatar":"https://www.linkedin.com/in/ak-malla",
    	"comitted_hours":22,
    	"created":"2017-04-23T20:41:43.810Z",
    	"estimated_tenure":"2017-04-23T20:41:43.810Z"}
    */

    name: DS.attr('string'),
    phone: DS.attr('string'),
    email: DS.attr('string'),
    _id: DS.attr('string'),
    about: DS.attr('string'),
    linkedin: DS.attr('string'),
    facebook: DS.attr('string'),
    avatar: DS.attr('string'),
    comitted_hours: DS.attr('string'),
    created: DS.attr('string'),
    estimated_tenure: DS.attr('string')

});
