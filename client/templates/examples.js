Template.contextExample.events({
		'click button': function(e, template) {
			Session.set('randomNumber', Math.random(0, 99));
		}
	}

);

Template.contextExample.helpers({
	logContext: function() {
		console.log('Context Log Helper', this);
		return Session.get('randomNumber');
	}
});
