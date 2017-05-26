Template.loginForm.events({
	"click #registerbtn" : function(e){
		e.preventDefault();
		myTemplates.set("registerForm");
	},
	"click #close" : function(e){
		e.preventDefault();
	},
	"submit form" :function(e){
		Meteor.loginWithPassword(e.target.email.value,e.target.password.value);
		return false;
	}
});