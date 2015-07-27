if (Meteor.isClient) {
	Tracker.autorun(function(c) {
		var example = Session.get('mySessionExample');
		if (c.firstRun) {
			//alert(example);
		}
	});
}

