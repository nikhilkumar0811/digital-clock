 const clock=document.getElementById('clock');


 setInterval(function(){
    let date=new Date();
    // console.log(data.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
 },1000);




