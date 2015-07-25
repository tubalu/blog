Template.contextExample.events({
        'click button': function (e, template) {
            Session.set('randomNumber', Math.random(0, 99));
        }
    }

);

Template.contextExample.helpers({
    logContext: function () {
        console.log('Rendered Context Example', this.data);
        return Session.get('randomNumber');
    },
    postsList: function () {
        return [
            {
                title: 'My Second entry',
                description: 'Borem doum color sit amet, consetetur sadipsciing elitr.',
                author: 'Fabian Vogelsteller',
                timeCreated: moment().substract(3, 'days').unix()
            }, {
                title: 'My First entry',
                description: 'Lorem ipsum dolor sit amet, constetur sadipscing elitr',
                author: 'Fabian Vogelsteller',
                timeCreated: moment().substract(7, 'days').unix()
            }
        ];
    }
});

Template.contextExample.rendered=function() {
    console.log('Rendered Context Example 1',this.data);
}
