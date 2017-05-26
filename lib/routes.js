FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("main",{banner:"banner",content:"contentMain"});
	}
});

FlowRouter.route("/soporte",{
	action : function(params,queryParams) {
	BlazeLayout.render("main",{banner:"banner_nav",content:"soporteTemplate"});
	}
});