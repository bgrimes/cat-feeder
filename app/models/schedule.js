module.exports = DS.Model.extend({
  comment: DS.attr('string'),

  createdAt: DS.attr('date', {
    defaultValue: function(){return new Date();}
  }),
  createdBy: DS.attr('string'),

  updatedAt: DS.attr('date', {
    defaultValue: function(){return new Date();}
  }),
  updatedBy: DS.attr('string')

});
