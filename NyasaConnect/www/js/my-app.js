var $$ = Dom7;

// Initialize app
var myApp = new Framework7({
    swipePanel: 'left',
    preloadPreviousPage: true,
    template7Pages: true,
    init: true //Disable App's automatic initialization
});


// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true //enable inline pages
});
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    myApp.alert("Moni");
    console.log(FileTransfer);
}
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
$(".b").click(function () {
    mainView.router.load({ pageName: 'electronics' });
});
$(".c").click(function () {
    mainView.router.load({ pageName: 'clothes' });
});
$(".d").click(function () {
    mainView.router.load({ pageName: 'houses' });
});
function camera() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}
function upload() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });

    function onSuccess(imageURL) {
        var image = document.getElementById('myImage');
        image.src = imageURL;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}
$(".floater").click(function () {
    camera();
    upload();
});

var swiper = app.swiper.get('.swiper-container');

swiper.slideNext();


