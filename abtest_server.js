Roles._collection.find({roles:'admin'}).observeChanges({

	added: function(id,fields) {
		// eyes({added:id,fields});
		ABTestServer.adminIds = _.union(ABTestServer.adminIds?ABTestServer.adminIds:[],[fields.userId])
	},

	removed: function(id) {
		Roles._collection.find({_id:id}).forEach(function(role) {
			// eyes({removed:id});
			ABTestServer.adminIds = _.without(ABTestServer.adminIds?ABTestServer.adminIds:[],[role.userId])
		});
	}
});

