// Get device width 
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// Hide frame by default
document.getElementById('framePreview').style.display = 'none';
var listItems = document.getElementsByClassName("leaderboard-list-item");
var i;
// Iterate over accordion and add click listeners
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        if(width>1024){
            // Toggle frame on the side 
            showFrame();
        }else {
            // Toggle modal 
            showModal();
        }
        setItemsInactive();   
        this.classList.add("active");
    });
}
// Hide blank text and show frame
function showFrame() {
    document.getElementById('blankPreview').style.display = 'none';
    document.getElementById('framePreview').style.display = 'block';
}
// Reset active state of all items
function setItemsInactive() {
    for (i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
}

//
// Modal controls
//
// Get the modal
var modal = document.getElementById("previewModal");
// Function to show modal
function showModal() {
    modal.style.display = "flex";
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