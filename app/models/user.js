var attr = DS.attr;

var User = DS.Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    email: attr('string'),

    fullName: function(){
      return "%@ %@".fmt(this.get('firstName'), this.get('lastName'));
    }.property('firstName', 'lastName')
});

User.FIXTURES = [
        {
            id: 1,
            firstName: 'Ben',
            lastName: 'Grimes',
            email: 'bgrimes@gmail.com'
        },
        {
            id: 2,
            firstName: 'Bob',
            lastName: 'Saget',
            email: 'bjes@gmail.com'
        }
    ];

module.exports = User;
