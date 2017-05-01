import DS from 'ember-data';
let {attr} = DS
export default DS.Model.extend({
  //profile: DS.belongsTo('profile'),
  date: attr("date"),
  startTime: attr('date'),
  endTime: attr('date'),
  totalSeconds: attr('number'),
  tangible: attr('boolean'),
  workCompleted: attr('string'),
  project: attr('string'),
  task: attr('string')

});
