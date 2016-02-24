
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
    
    this.dosomething=function(){
        var dialogEl = document.getElementById('content');
        ko.applyBindings(testviewmodel, dialogEl);
    }
}

function testviewmodel() {
    name="test";
}
var topNavBar = document.getElementById('topNavBar');
// Activates knockout.js
ko.applyBindings(new AppViewModel(),topNavBar);