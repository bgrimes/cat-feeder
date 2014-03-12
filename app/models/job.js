var Job = DS.Model.extend({
  name: DS.attr('string'),
  // "07:00", "17:00", "5:45", etc
  scheduledFor: DS.attr('string'),

  createdBy: DS.belongsTo('user'),
  updatedBy: DS.belongsTo('user'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string')

});

Job.FIXTURES = [
  {
    id: 1,
    name: 'Morning Feeding',
    scheduledFor: "06:00",
    createdBy: 1,
    updatedBy: 1,
    createdAt: '2014-03-08 12:23:59',
    updatedAt: '2014-03-08 12:23:59'

  },
  {
    id: 2,
    name: 'Evening Feeding',
    scheduledFor: "17:00",
    createdBy: 1,
    updatedBy: 1,
    createdAt: '2014-03-08 12:23:59',
    updatedAt: '2014-03-08 12:23:59'

  }
];

module.exports = Job;
