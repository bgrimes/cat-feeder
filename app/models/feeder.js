
var Feeder = DS.Model.extend({
  name: DS.attr('string'),
  deviceId: DS.attr('string'),
  apiToken: DS.attr('string'),
  createdBy: DS.belongsTo('user'),
  updatedBy: DS.belongsTo('user'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string')
});

Feeder.FIXTURES = [
  {
    id: 1,
    name: 'Cat 1 Feeder',
    deviceId: '123456',
    apiToken: 'CDF35E9243',
    createdBy: 1,
    updatedBy: 1,
    createdAt: '2014-03-08 12:23:59',
    updatedAt: '2014-03-08 12:23:59'
  },
  {
    id: 2,
    name: 'Cat 2 Feeder',
    deviceId: '314159',
    apiToken: 'A98THE34G',
    createdBy: 1,
    updatedBy: 1,
    createdAt: '2014-03-08 12:25:59',
    updatedAt: '2014-03-08 12:25:59'
  }
];

module.exports = Feeder;
