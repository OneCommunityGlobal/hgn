import DS from 'ember-data';

const {
  attr,
  //belongsTo
  } = DS;

export default DS.Model.extend({
  //profile: DS.belongsTo('profile'),
  createDate: attr('date'),
  lastModifyDate: attr('date'),
  totalSeconds: attr('number'),
  tangible: attr('boolean'),
  workCompleted: attr('string'),
  project: attr('string'),
  task: attr('string')
});
