// Get device width
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var modelFramePreviewImg = document.querySelector("#modelFramePreviewImg");
var modalUserName = document.querySelector("#modal_username");
var modalUserLikes = document.querySelector("#modal_likes");
var modalLeaderboardRank = document.querySelector(
  ".modal-content .leaderboard-rank",
);
var modalUpVote = document.querySelector(".modal-content a");
var content = document.querySelector("#content");
var template = document.querySelector("template");
var galleryJSON = null;

function handleJSON(data) {
  galleryJSON = data.gallery;
  // Iterate over entries and append HTML 
  for (const el of galleryJSON) {
    var clone = template.content.cloneNode(true);
    clone.querySelector("#insta_likes").textContent = el.likes;
    clone.querySelector("#profile_pic").src = el.profile;
    clone.querySelector("#insta_id").textContent = el.insta_id;
    clone.querySelector("a").href = el.post;
    clone.querySelector(".leaderboard-rank").textContent = el.standing;
    // Trim caption to 120 char 
    if(el.caption.length>120) {
      clone.querySelector("#caption").textContent = el.caption.substring(0,120) + '...'  
    }else if(el.caption==='#'){
      clone.querySelector("#caption").textContent = "";  
    }else {
      clone.querySelector("#caption").textContent = el.caption
    }
    var img = clone.querySelectorAll("#thumbs");
    img[0].src = el.thumbnail;
    img[1].src = el.thumbnail;
    content.appendChild(clone);
  }
  // Add event listeners to items 
  addEventListeners();
  // Hide loading icon 
  document.querySelector("#loading-icon").style.display = "none";
}

window.onload = function () {
  fetch("/gallery/json", {
    method: "get",
  })
    .then((response) => response.json())
    .then((jsonData) => handleJSON(jsonData))
    .catch((err) => console.log(err));
};

function addEventListeners() {
  var entries = document.querySelectorAll(".entry-item");
  // Iterate over entries and add click listeners
  for (var i = 0; i < entries.length; i++) {
    if (width > 1024) {
      entries[i].addEventListener("mouseenter", function (evt) {
        setItemsInactive();
        this.classList.add("active");
      });
    } else {
      entries[i].addEventListener("click", function (evt) {
        // Toggle modal
        showModal(evt);
      });
    }
    entries[i].addEventListener("mouseleave", function (evt) {
      setItemsInactive();
    });
  }
}

// Reset active state of all items
function setItemsInactive() {
  var entries = document.querySelectorAll(".entry-item");
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
  modelFramePreviewImg.src = frame.target.querySelector("img").src;
  modalUserName.innerHTML = frame.target.querySelector(".insta_id").innerHTML;
  modalUserLikes.innerHTML =
    frame.target.querySelector("#insta_likes").innerHTML;
  modalLeaderboardRank.innerHTML =
    frame.target.querySelector(".leaderboard-rank").innerHTML;
  modalUpVote.href = frame.target.querySelector("#upvote-link");
}
// Modal close btn
var modalCloseBtn = document.getElementById("modalCloseBtn");
// When the user clicks on the button, open the modal
modalCloseBtn.onclick = function () {
  modal.style.height = "0";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Search function
function search(username) {
  // Hide empty text
  document.querySelector("#search-empty-text").style.display = "none" 
  // Get entries
  var entries = document.querySelectorAll(".col-sm-6");
  // Flag for checking at least one entry 
  let search = false;
  // Iterate over entries 
  for (var i = 0; i < entries.length; i++) {
    // Check if username matches 
    if(entries[i].querySelector("#insta_id").textContent.includes(username)) {
      entries[i].style.display = "block";
      // Set flag 
      search = true;     
    }else {
      entries[i].style.display = "none";     
    }
  }
  // Show empty text if no entries 
  if(!search) {
    document.querySelector("#search-empty-text").style.display = "block" 
  }
}
