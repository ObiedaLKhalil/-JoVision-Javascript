const time = new Date();
setInterval(
function(){
time.setSeconds(time.getSeconds() + 1);
if (time.getSeconds() == 60) {  time.setMinutes(time.getMinutes() + 1);    time.setSeconds(0);
 }
if (time.getMinutes() == 60) {  time.setHours(time.getHours() + 1);    time.setMinutes(0);
 }
document.getElementById("time").innerHTML = time.getHours().toString()+ ":"+time.getMinutes().toString()+":"+time.getSeconds().toString();
},1000);

