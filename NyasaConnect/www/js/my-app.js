// Initialize app
var myApp = new Framework7({
    pushState: true, //Android back button go back a page
    init: false //Disable App's automatic initialization
});
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
    myApp.alert("Welcome");
})

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    domCache: true //enable inline pages
});


// Now we need to run the code that will be executed only for About page.
$("input").focus(function () {
    //we add the css class blur to the elements that we would like to blur on focus
    $("img").addClass("blur");
    $("p").addClass("blur");
}).blur(function () {
    //we remove the blur class which will remove the blur from the elements specified when we are no longer focused on an input
    $("img").removeClass("blur");
    $("p").removeClass("blur");
    });
$(".a").click(function () {
    mainView.router.load({ pageName: 'cars' });
});
myApp.init();