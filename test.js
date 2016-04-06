var page = require('webpage').create();

page.open('http://example.com/', function(status) {
    if (status === "success") {
        page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {
            if (page.injectJs('do.js')) {
                var title = page.evaluate(function() {
                    // returnTitle is a function loaded from our do.js file - see below
                    $('h1').html('Fubar');
                    return returnTitle();
                });
                console.log(title);
                page.render('fubar.png');
                console.log(page.content);
                phantom.exit();
            }
        });
    }
});

// page.open('http://example.com/', function(status) {
//     console.log("Status: " + status);
//     if(status === "success") {
//
//         page.includeJs(
//             // Include the https version, you can change this to http if you like.
//             'https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js',
//             function() {
//                 (page.evaluate(function() {
//                     $('h1').html('Fubar');
//                     page.render('fubar.png');
//                     phantom.exit();
//
//                 }))
//             }
//         );
//
//         page.render('example.png');
//     }
// });

// page.open('http://phantomjs.org', function (status) {
//     var content = page.content;
//     console.log('Content: ' + content);
//     phantom.exit();
// });


// var page = require('webpage').create(),
//     system = require('system'),
//     t, address;
//
// if (system.args.length === 1) {
//     console.log('Usage: loadspeed.js <some URL>');
//     phantom.exit();
// }
//
// t = Date.now();
// address = system.args[1];
// page.open(address, function(status) {
//     if (status !== 'success') {
//         console.log('FAIL to load the address');
//     } else {
//         t = Date.now() - t;
//         console.log('Loading ' + system.args[1]);
//         console.log('Loading time ' + t + ' msec');
//     }
//     phantom.exit();
// });

// phantom.exit();