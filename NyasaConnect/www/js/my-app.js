var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

if (isAndroid || isIos) {
    $$('head').append(
        '<link rel="stylesheet" href="lib/framework7/css/framework7.material.min.css">' +
        '<link rel="stylesheet" href="lib/framework7/css/framework7.material.colors.min.css">' +
        '<link rel="stylesheet" href="lib/framework7-icons/css/framework7-icons.css">' +
        '<link rel="stylesheet" href="css/styles.css">'+
        //'<link rel="stylesheet" href="lib/framework7/css/framework7.ios.min.css">'+
        '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.colors.min.css">'
    );
}
// Initialize app
var myApp = new Framework7({
    // Enable Material theme for Android device only
    material: isAndroid ? true : false,
    // Enable Template7 pages
    template7Pages: true,
    pushState: true, //Android back button go back a page
    init: false //Disable App's automatic initialization
});


// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true //enable inline pages
});
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
    myApp.alert("Welcome");
})


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

var swiper = app.swiper.get('.swiper-container');

swiper.slideNext();