Template.home.created = function() {
	console.log('Created the home template');
};
Template.home.rendered = function() {
	console.log('Rendered the home template');
	//this.$("p").html("We just replaced that text, <strong>yeah</strong>");
};
Template.home.destroyed = function() {
	console.log('Destroyed the home template');
};

Template.home.helpers({
	dataContextHelper: function() {
		return {
			someText: 'This text came from a helper with some <strong> HTML</strong>.',
			someNested: {
				text: 'That comes from "someNested.text"'
			}
		};
	},
	postsList: function() {
		return Posts.find({}, {
			sort: {
				timeCreated: -1
			}
		});
	},
	sessionExample:function(){
		return Session.get('mySessionExample');
	}
});

Template.home.events({
	'click button.lazyload': function(e, template) {
		var currentLimit = Session.get('lazyloadLimit');

		Session.set('lazyloadLimit', currentLimit + 2);
	}
});
