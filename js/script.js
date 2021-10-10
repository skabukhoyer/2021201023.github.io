const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click',() => {document.body.classList.toggle('nav-open');

});

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        
    })
})
document.getElementById("home-xyz").onclick = function() {myFunction()};
document.getElementById("about-xyz").onclick = function() {myFunction1()};
document.getElementById("edu-xyz").onclick = function() {myFunction2()};
document.getElementById("skills-xyz").onclick = function() {myFunction3()};
document.getElementById("project-xyz").onclick = function() {myFunction4()};
document.getElementById("contacts-xyz").onclick = function() {myFunction5()};
function myFunction(){
  document.getElementById("home").style.display="block";
  document.getElementById("education").style.display="none";
  document.getElementById("skills").style.display="none";
  document.getElementById("projects").style.display="none";
  document.getElementById("footer__id").style.display="none";
  document.getElementById("about").style.display="none";
}
function myFunction1() {
  document.getElementById("home").style.display="none";
  document.getElementById("education").style.display="none";
  document.getElementById("skills").style.display="none";
  document.getElementById("projects").style.display="none";
  document.getElementById("footer__id").style.display="none";
  document.getElementById("about").style.display="block";
}

function myFunction2() {
  document.getElementById("home").style.display="none";
  document.getElementById("skills").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("projects").style.display="none";
  document.getElementById("footer__id").style.display="none";
  document.getElementById("education").style.display="block";
}

function myFunction3() {
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("education").style.display="none";
  document.getElementById("projects").style.display="none";
  document.getElementById("footer__id").style.display="none";
  document.getElementById("skills").style.display="block";
}

function myFunction4() {
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("education").style.display="none";
  document.getElementById("skills").style.display="none";
  document.getElementById("footer__id").style.display="none";
  document.getElementById("projects").style.display="block";
}

function myFunction5() {
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("skills").style.display="none";
  document.getElementById("projects").style.display="none";
  document.getElementById("education").style.display="none";
  document.getElementById("footer__id").style.display="block";
}
//document.getElementById("home").style.display="none";
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