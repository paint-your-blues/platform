// Get device width 
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// Hide frame by default
var framePreview = document.querySelector('#framePreview');
framePreview.style.display = 'none';

framePreviewImg=document.querySelector('#framePreviewImg');
modelFramePreviewImg=document.querySelector('#modelFramePreviewImg');

var listItems = document.getElementsByClassName("leaderboard-list-item");

// Iterate over accordion and add click listeners
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function (evt) {
        if(width>1024){
            // Toggle frame on the side 
            showFrame(evt);
        }else {
            // Toggle modal 
            showModal(evt);
        }
        setItemsInactive();   
        this.classList.add("active");
    });
}
// Hide blank text and show frame
function showFrame(frame) {
    document.getElementById('blankPreview').style.display = 'none';
    framePreview.style.display = 'block';
    framePreviewImg.src=frame.target.querySelector(".leaderboard-thumbnail").src;
}
// Reset active state of all items
function setItemsInactive() {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
}

//
// Modal controls
//
// Get the modal
var modal = document.getElementById("previewModal");
// Function to show modal
function showModal(frame) {
    modal.style.display = "flex";
    modelFramePreviewImg.src=frame.target.querySelector(".leaderboard-thumbnail").src;
}
// Modal close btn
var modalCloseBtn = document.getElementById("modalCloseBtn");
// When the user clicks on the button, open the modal
modalCloseBtn.onclick = function() {
    modal.style.display = "none";
    // Reset selection 
    setItemsInactive();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // Reset selection 
    setItemsInactive();
  }
}