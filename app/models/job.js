var Job = DS.Model.extend({
  comment: DS.attr('string'),

  createdBy: DS.belongsTo('user'),
  updatedBy: DS.belongsTo('user'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string')

});

Job.FIXTURES = [
  {
    id: 1,
    comment: 'Morning Feeding',
    createdBy: 1,
    updatedBy: 1,
    createdAt: '2014-03-08 12:23:59',
    updatedAt: '2014-03-08 12:23:59'

  },
  {
    id: 2,
    comment: 'Evening Feeding',
    createdBy: 1,
    updatedBy: 1,
    createdAt: '2014-03-08 12:23:59',
    updatedAt: '2014-03-08 12:23:59'

  }
];

module.exports = Job;
