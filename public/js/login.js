function AppViewModel() {
    this.authenticated = ko.observable(false);
    this.username = ko.observable('username');
    this.email = ko.observable('');
    this.password = ko.observable('');
    this.signIn=function()
    {
       this.authenticated(true); 
    }
    this.signOut = function()
    {
        this.authenticated(false);
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());