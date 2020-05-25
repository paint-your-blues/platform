// Get device width 
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var modelFramePreviewImg=document.querySelector('#modelFramePreviewImg');

var entries = document.getElementsByClassName("entry-item");

// Iterate over entries and add click listeners
for (var i = 0; i < entries.length; i++) {
    if(width>1024){
        entries[i].addEventListener("click", function (evt) {
            setItemsInactive();   
            this.classList.add("active");
        });
    }else {
        entries[i].addEventListener("click", function (evt) {
            // Toggle modal 
            showModal(evt);
        });
    }
    // entries[i].addEventListener("mouseleave", function (evt) {
    //     setItemsInactive();
    // });
}
// Reset active state of all items
function setItemsInactive() {
    for (var i = 0; i < entries.length; i++) {
        entries[i].classList.remove("active");
    }
}

//
// Modal controls
//
// Get the modal
var modal = document.getElementById("previewModal");
// Function to show modal
function showModal(frame) {
    modal.style.height = "100%";
    console.log(frame.target)
    modelFramePreviewImg.src=frame.target.src;
}
// Modal close btn
var modalCloseBtn = document.getElementById("modalCloseBtn");
// When the user clicks on the button, open the modal
modalCloseBtn.onclick = function() {
    modal.style.height = "0"
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}