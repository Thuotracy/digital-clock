setInterval(() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    
    // convert 24hr clock to 12hr clock
    
    if (h > 12){
        h = h -12;
    }
    
    // add zero before single digit number
    
    h = (h < 10)? "0" + h : h;
    m = (m < 10)? "0" + m : m;
    s = (s < 10)? "0" + s : s;
    
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am

    hh.style.strokeDashoffset = 440 -(440 * h) / 12;
    
    // 12 hrs clock
    mm.style.strokeDashoffset = 440 -(440 * m) / 60;
    
    // 60 minutes
    ss.style.strokeDashoffset = 440 -(440 * s) / 60;
    // 60 seconds

      
})

