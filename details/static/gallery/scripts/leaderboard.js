// Get device width 
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// Hide frame by default
var framePreview = document.querySelector('#framePreview');
framePreview.style.display = 'none';

var framePreviewImg=document.querySelector('#framePreviewImg');
var modelFramePreviewImg=document.querySelector('#modelFramePreviewImg');

var listItems = document.getElementsByClassName("leaderboard-list-item");

// Iterate over accordion and add click listeners
for (var i = 0; i < listItems.length; i++) {
    if(width>1024){
        listItems[i].addEventListener("mouseenter", function (evt) {
            // Toggle frame on the side 
            showFrame(evt);
            setItemsInactive();   
            this.classList.add("active");
        });
    }else {
        listItems[i].addEventListener("click", function (evt) {
            // Toggle modal 
            showModal(evt);
        });
    }
}
// Hide blank text and show frame
function showFrame(frame) {
    document.getElementById('blankPreview').style.display = 'none';
    framePreview.style.display = 'flex';
    framePreviewImg.src=frame.target.querySelector(".leaderboard-thumbnail").src;
}
// Reset active state of all items
function setItemsInactive() {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
}
// Reset text when mouse leaves list
document.getElementById("rank-list").addEventListener("mouseleave", function (evt) {
    setItemsInactive();   
    document.getElementById('blankPreview').style.display = 'block';
    framePreview.style.display = 'none';
});;


//
// Modal controls
//
// Get the modal
var modal = document.getElementById("previewModal");
// Function to show modal
function showModal(frame) {
    modal.style.height = "100%";
    modelFramePreviewImg.src=frame.target.querySelector(".leaderboard-thumbnail").src;
    document.querySelector("#modal_username").innerHTML=frame.target.querySelector('#insta_id').innerHTML;
    document.querySelector("#modal_likes").innerHTML=frame.target.querySelector('#insta_likes').innerHTML;
    document.querySelector(".modal-content .leaderboard-rank").innerHTML=frame.target.querySelector('.leaderboard-rank').innerHTML
}
// Modal close btn
var modalCloseBtn = document.getElementById("modalCloseBtn");
// When the user clicks on the button, open the modal
modalCloseBtn.onclick = function() {
    modal.style.height = "0"
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

//
// Refresh time indicator
//
function startTimer() {
    var refreshStatusEl = document.getElementById('refreshStatus');
    refreshStatusEl.innerHTML = 'updated just now.'
    setTimeout(() => {
        refreshStatusEl.innerHTML = 'updated 30s ago.'
    }, 30000);
    let minTimer = 0;
    setInterval(() => {
        minTimer++;
        refreshStatusEl.innerHTML = 'updated '+minTimer+'m ago.'
    }, 60000);
}
startTimer();