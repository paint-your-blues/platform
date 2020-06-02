//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Navbar shadow on scroll ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
window.onscroll = function () {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector("nav").style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.08)";
  } else {
    document.querySelector("nav").style.boxShadow = "none";
  }
}

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Navbar toggle function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
var sidenav = document.getElementById("sidenav");
function toggleNav() {
  sidenav.style.width = "100%";
}
window.onclick = function(event) {
  if (event.target == sidenav) {
    document.getElementById("sidenav").style.width = "0";
  }
}