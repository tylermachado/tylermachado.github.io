var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

var sendback = new Object();

sendback.command = $_GET['command'];
sendback.text = $_GET['token'];
sendback.token = $_GET['token'];

return JSON.stringify(sendback);