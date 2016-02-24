
function MenuViewModel() {
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

function aboutviewmodel() {
    name="test";
}


// Top binding
var topNavBar = document.getElementById('topNavBar');
ko.applyBindings(new MenuViewModel(),topNavBar);

//Home page binding
this.aboutvisible = ko.obervable(false);
this.showabout = function()
{
        var dialogEl = document.getElementById('aboutcontent');
        ko.applyBindings(aboutviewmodel, dialogEl);
        this.aboutvisible(true);
        
}