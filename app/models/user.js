import DS from 'ember-data';

export default DS.Model.extend({
    userName: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	email: DS.attr('string'),
	contact: DS.attr('string'),
	role: DS.attr('string'),
	_id: DS.attr('string')
});
