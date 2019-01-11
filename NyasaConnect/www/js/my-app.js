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
    //myApp.alert('Here goes alert text', 'Custom Title!', function () {
    //myApp.alert('Button clicked!')
    //});
});
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function deviceIsReady() {
    if (StatusBar.isVisible) {
        StatusBar.hide();
    }
    //alert('Device is ready!');
});
$(".floater").click(function () {    
    mainView.router.load({ pageName: 'upload' });
    //getImage();
    //openBrowser();
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
    openBrowser();
    //var jpgcontainer = document.getElementById('jpg');
    //var pngcontainer = document.getElementById('png');
    //var files = {
    //    'jpg': 5
    //};

    //for (var jpgext in files) {
    //    for (var i = 0; i < files.length; i++) {
    //        var jpgsrc = "http://www.bizadz.hostingerapp.com/images/" + (i + 1) + "." + jpgext;
    //        var jpgimg = new Image();
    //        jpgimg.src = jpgsrc;
    //        jpgcontainer.appendChild(jpgimg);
    //    }
    //}
    //mainView.router.load({ pageName: 'cars' });
});
function getelectronics() {
    $$.get('http://bizadz.hostingerapp.com/electronics.php', {}, function (data) {
        $$('#PAGEPlaceHolder').html(data);
    });
}
$(".b").click(function () {
    var container = $$('.demo-progressbar-load-hide p:first-child');
    if (container.children('.progressbar').length) return; //don't run all this if there is a current progressbar loading
 
    myApp.showProgressbar(container, 0);
 
    // Simluate Loading Something
    var progress = 0;
    function simulateLoading() {
        setTimeout(function () {
            var progressBefore = progress;
            progress += Math.random() * 5;
            myApp.setProgressbar(container, progress);
            if (progressBefore < 100) {
                simulateLoading(); //keep "loading"
                $("#PAGEPlaceHolder").hide();
            }
            else myApp.hideProgressbar(container);//hide
            getelectronics();
            $("#PAGEPlaceHolder").show("");
            mainView.router.load({ pageName: 'electronics' });
        }, Math.random() * 50 + 10);
    }
    simulateLoading();
});
$(".c").click(function () {
    mainView.router.load({ pageName: 'clothes' });
});
$(".d").click(function () {
    mainView.router.load({ pageName: 'houses' });
});
myApp.init();
function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 100,
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
function cameraGetPicture() {
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

var camearaOptions = {
    quality: 100,
    destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
};
function getImage() {
    navigator.camera.getPicture(uploadPhoto, onError, camearaOptions);
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
    ft.upload(imageURI, "http://192.168.1.103/phonegap/upload/upload.php",
        function (result) {
            console.log(JSON.stringify(result));
        },
        function (error) {
            console.log(JSON.stringify(error));
        }, options);
}
function openBrowser() {
    var url = 'http://www.bizadz.hostingerapp.com';
    var target = '_blank';
    var ref = cordova.InAppBrowser.open(url, target, 'location=no,hidden=no,zoom=no');

    ref.addEventListener('loadstart', loadstartCallback);
    ref.addEventListener('loadstop', loadstopCallback);
    ref.addEventListener('loaderror', loaderrorCallback);
    ref.addEventListener('exit', exitCallback);

    function loadstartCallback(event) {
        console.log('Loading started: ' + event.url);
    }

    function loadstopCallback(event) {
        console.log('Loading finished: ' + event.url);
    }

    function loaderrorCallback(error) {
        console.log('Loading error: ' + error.message);
    }

    function exitCallback() {
        console.log('Browser is closed...');
    }
}

var swiper = app.swiper.get('.swiper-container');

swiper.slideNext();