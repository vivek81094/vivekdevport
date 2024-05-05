setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("min").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("sec").style.transform = `rotate(${srotation}deg)`;
}, 1000);


// document.getElementById("myDIV").style.transform = "rotate(20deg)";