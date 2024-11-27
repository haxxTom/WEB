function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var i = 0;
var txt = 'Aplikace a bezpečnost na míru pro vaši firmu';
var speed = 20;

document.addEventListener("DOMContentLoaded", function() {

    typeWriter();
  
});

function typeWriter(){
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function closeAlert() {
  const alertBox = document.querySelector('.my-alert');
  alertBox.style.display = 'none';
}