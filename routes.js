if (Meteor.isClient) {
	Session.setDefault('lazyloadLimit', 2);
}

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	onAfterAction: function() {

		var data = Posts.findOne({
			slug: this.params.slug
		});

		if (_.isObject(data) && !_.isArray(data)) {
			document.title = 'My meteor blog - ' + data.title;
		} else {
			document.title = 'My meteor blog - ' + data.route;
		}

	}
});


Router.map(function() {

	this.route('Home', {
		path: '/',
		template: 'home',
		subscriptions: function() {
			return Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
		}
	});

	this.route('About', {
		path: '/about',
		template: 'about'
	});

	this.route('Create Post', {
		path: '/create-post',
		template: 'editPost'
	});


	this.route('Post', {
		path: '/posts/:slug',
		template: 'post',

		waitOn: function() {
			return Meteor.subscribe('single-post', this.params.slug);
		},

		data: function() {
			return Posts.findOne({
				slug: this.params.slug
			});
		}
	});
});

