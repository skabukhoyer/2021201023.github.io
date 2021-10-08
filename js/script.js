const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click',() => {document.body.classList.toggle('nav-open');
});

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


function startTime() {
    const today = new Date();
    let din=today.getDate();
    let mon=today.getMonth();
    let y=today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('sticky').innerHTML = "Date: " + din + "/" + mon + "/" + y + "Time: " +  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }