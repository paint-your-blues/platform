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
function toggleNav() {
  var x = document.getElementById("navbarCollapse");
  if (x.className === "container") {
    x.className += "container active";
  } else {
    x.className = "container";
  }
}