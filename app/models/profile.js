import DS from 'ember-data';

export default DS.Model.extend({
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
