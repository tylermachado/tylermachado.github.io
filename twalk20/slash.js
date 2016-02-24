var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

var response = new Object();

response.command = $_GET['command'];
response.text = $_GET['token'];
response.token = $_GET['token'];

return response;