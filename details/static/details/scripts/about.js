//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FAQ accordion ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 
var acc = document.getElementsByClassName("accordion");
var i;
// Iterate over accordion and add click listeners
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// Get device width 
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
// Set first collapse to be active by if large device 
if(width>768){
  acc[0].classList.toggle("accordion-active");
  acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";
}

//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Section scrolling ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Reset scroll on reload 
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
// Smooth scrolling 
var guidelinesSection = document.getElementById('guidelinesSection');
var guidelinesPosition = guidelinesSection.getBoundingClientRect().top - 72;

function scrollToGuidelines() {
  window.scrollTo({
    top: guidelinesPosition,
    behavior: "smooth"
  });
}

