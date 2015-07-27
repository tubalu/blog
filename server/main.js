Meteor.startup(function() {
	console.log('Server started');
	// # store Data->Adding post expamples
	if (Posts.find().count() === 0) {
		console.log('Add dummy posts');
		var dummyPosts = [{
			title: 'My First Entry',
			slug: 'my-first-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(10, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My Second Entry',
			slug: 'my-2nd-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(9, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My 3rd Entry',
			slug: 'my-3rd-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(8, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My 4th Entry',
			slug: 'my-4th-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(7, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My 5th Entry',
			slug: 'my-5th-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(6, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My 6th Entry',
			slug: 'my-6th-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(5, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My 7th Entry',
			slug: 'my-7th-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(4, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My 8th Entry',
			slug: 'my-8th-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(3, 'days').unix(),
			author: 'John Doe'
		}, {
			title: 'My 3rd Entry',
			slug: 'my-3rd-entry',
			description: 'Lorem ipsumdolor sit amet.',
			text: 'Lorem ipsum dolor sit amet...',
			timeCreated: moment().subtract(2, 'days').unix(),
			author: 'John Doe'
		}];
		_.each(dummyPosts, function(post) {
			Posts.insert(post);
		});
	}
	if (Meteor.users.find().count() === 0) {
		console.log('Createed Admin User');

		Accounts.createUser({
			username: 'scott',
			email: 'qingcai@gmail.com',
			password: '1234',
			profile: {
				name: 'Scott Lu'
			}
		});
	}

	Meteor.users.update("B75MCSZpukMHqZd7q", {
		$set: {
			roles: {
				admin: true
			}
		}
	});
	console.log("update user admin done");

});


Accounts.config({
	forbidClientAccountCreation: true
});


if (Meteor.isClient) {
	Meteor.subscribe("userRoles");
}

