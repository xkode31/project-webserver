/* - Relógio - */

function getTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('showtime').innerHTML=h+":"+m+":"+s;
    t=setTimeout(function(){getTime()},500);
}


function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}



/* - p5-js - */

function setup() {
}

function draw() {
  
}


