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

function loopthroughImages() {
    var jpgcontainer = document.getelementbyid('jpg');
    var pngcontainer = document.getelementbyid('png');
    var files = {
        'jpg': 5
    };

    for (var jpgext in files) {
        for (var i = 0; i < files.length; i++) {
            var jpgsrc = "http://www.bizadz.hostingerapp.com/images/" + (i + 1) + "." + jpgext;
            var jpgimg = new image();
            jpgimg.src = jpgsrc;
            jpgcontainer.appendchild(jpgimg);
        }
    }
}