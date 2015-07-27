Meteor.publish('all-posts', function() {
	return Posts.find();
});

Meteor.publish('limited-posts', function() {
	return Posts.find({}, {
		limit: 2,
		sort: {
			timeCreated: -1
		}
	});
});
Meteor.publish('lazyload-posts', function(limit) {
	return Posts.find({}, {
		limit: limit,
		fields: {
			title: 1,
			slug: 1,
			timeCreated: 1,
			description: 1,
			author: 1
		},
		sort: {
			timeCreated: -1
		}
	});
});


Meteor.publish('single-post', function(slug) {
	return Posts.find({
		slug: slug
	});
});

Meteor.publish("userRoles",function(){
	if(this.userId) {
		return Meteor.users.find({_id:this.userId},{fields:{roles:1}});
	}
	else {
		this.ready();
	}
});
