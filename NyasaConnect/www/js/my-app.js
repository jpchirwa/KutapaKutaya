// Initialize app
var myApp = new Framework7({
    material: true,
    swipePanel: 'left',
    template7Pages: true,
    pushState: true, //Android back button go back a page
    init: false //Disable App's automatic initialization
});



// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true //enable inline pages
});

var $$ = Dom7;
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
});
$(".floater").click(function () {
    //myApp.addNotification({
    //    title: 'Place your Ad',
    //    message: 'Welcome to Malawis first online trading platform with over a thousand items up for sale, enjoy your experience',
    //    closeOnClick: true,
    //    onClose: function () {
    //    }
    //});
    mainView.router.load({ pageName: 'upload' });
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
document.getElementById("filesa").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("imagea").src = e.target.result;
        document.getElementById("imagea").style.display = "block"; 
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};
document.getElementById("filesb").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("imageb").src = e.target.result;
        document.getElementById("imageb").style.display = "block";
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};
document.getElementById("filesc").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("imagec").src = e.target.result;
        document.getElementById("imagec").style.display = "block";
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};
function getelectronics() {
    $$.get('http://kutapakutaya.online/electronics.php', {}, function (data) {
        $$('#PAGEPlaceHolder').html(data);
    });
}
function submit() {
    $$.get('http://kutapakutaya.online/displayItem.php', {}, function (data) {
        $$('#PAGEPlaceHolderItem').html(data);
    });
}
$(".item-content item-link electronics").click(function () {
    alert();
});
$(".a").click(function () {
    mainview.router.load({ pagename: 'cars' });
});
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
               }
            else myApp.hideProgressbar(container);//hide
            getelectronics();
            mainView.router.load({ pageName: 'electronics' });
        }, Math.random() * 50 + 10);
    }
    simulateLoading();
});
$(".btest").click(function () {
    getelectronics();
    mainView.router.load({ pageName: 'electronics' });
    //function for electronics page
});
$(".c").click(function () {
    mainView.router.load({ pageName: 'clothes' });
    //function for clothes page
});
$(".d").click(function () {
    mainView.router.load({ pageName: 'houses' });
    //function for houses page
});
$(".submit").click(function () {
    var container = $$('.demoa-progressbar-load-hide p:first-child');
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
            }
            else myApp.hideProgressbar(container);//hide
            submit();//function for submitting to php file to upload
            mainView.router.load({ pageName: 'displayitem' });
            document.getElementById("myForm").reset();
            document.getElementById("imagea").style.display = 'none';
            document.getElementById("imageb").style.display = 'none';
            document.getElementById("imagec").style.display = 'none';
        }, Math.random() * 50 + 10);
    }
    simulateLoading();

    //below funtion is add notification
    //myApp.addNotification({
    //    title: 'My Awesome App',
    //    subtitle: 'New message from John Doe',
    //    message: 'Hello, how are you? ',
    //    media: '<img width="20" height="20" style="border-radius:10%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">',
    //    onClose: function () {
    //        submit();//function for submitting to php file to upload
    //        //mainView.router.back({ pageName: 'index' }); //if i want to go back to the home page
    //        mainView.router.load({ pageName: 'displayitem' });
    //    }
    //});
});
myApp.init();
