var roleCollection=Roles._collection?Roles._collection:Meteor.users;
roleCollection.find({roles:'admin'}).observeChanges({

	added: function(id,fields) {
		ABTestServer.adminIds = _.union(ABTestServer.adminIds?ABTestServer.adminIds:[],[fields.userId])
	},

	removed: function(id) {
		roleCollection.find({_id:id}).forEach(function(role) {
			ABTestServer.adminIds = _.without(ABTestServer.adminIds?ABTestServer.adminIds:[],[role.userId])
		});
	}
});

