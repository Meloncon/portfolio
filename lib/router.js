FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', { home: "home" });
    }
});
