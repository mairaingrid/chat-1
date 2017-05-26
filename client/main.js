Template.main.helpers({
	username : function(){
		return Accounts.user().username;
	}
})
Template.main.events({
	"click #logout" : function(){
		Meteor.logout();
	}
})