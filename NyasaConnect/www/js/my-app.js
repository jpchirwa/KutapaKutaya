var $$ = Dom7;

// Initialize app
var myApp = new Framework7({
    swipePanel: 'left',
    preloadPreviousPage: true,
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
$(".floater").click(function () {
    alert("ok")
    navigator.camera.getPicture(uploadPhoto, onError, camearaOptions);
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
$(".b").click(function () {
    mainView.router.load({ pageName: 'electronics' });
});
$(".c").click(function () {
    mainView.router.load({ pageName: 'clothes' });
});
$(".d").click(function () {
    mainView.router.load({ pageName: 'houses' });
});
myApp.init();

var swiper = app.swiper.get('.swiper-container');

swiper.slideNext();

var camearaOptions = {
    quality: 100,
    destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
}


function onError(err) { alert(error); }

function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";

    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imageURI, "http://192.168.11.125/phonegap/upload/upload.php",
        function (result) {
            console.log(JSON.stringify(result));
        },
        function (error) {
            console.log(JSON.stringify(error));
        }, options);
}