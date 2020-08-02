// Get device width
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

var modelFramePreviewImg = document.querySelector("#modelFramePreviewImg");
var modalUserName = document.querySelector("#modal_username");
var modalUserLikes = document.querySelector("#modal_likes");
var modalLeaderboardRank = document.querySelector(
  ".modal-content .leaderboard-rank",
);
var modalUpVote = document.querySelector(".modal-content a");
var entries = document.querySelectorAll(".entry-item");
var content = document.querySelector("#content");
var template = document.querySelector("template");
var galleryJSON = null;

function handleJSON(data) {
  galleryJSON = data.gallery;
  console.log(galleryJSON);
  for (const el of galleryJSON) {
    var clone = template.content.cloneNode(true);
    clone.querySelector("#insta_likes").textContent = el.likes;
    clone.querySelector("#profile_pic").src = el.profile;
    clone.querySelector("#insta_id").textContent = el.insta_id;
    clone.querySelector("a").href = el.post;
    clone.querySelector(".leaderboard-rank").textContent = el.standing;
    clone.querySelector("#caption").textContent = el.caption === "#"
      ? " "
      : el.caption;
    var img = clone.querySelectorAll("#thumbs");
    img[0].src = el.thumbnail;
    img[1].src = el.thumbnail;
    content.appendChild(clone);
  }
}

window.onload = function () {
  fetch("/gallery/json", {
    method: "get",
  })
    .then((response) => response.json())
    .then((jsonData) => handleJSON(jsonData))
    .catch((err) => console.log(err));
};

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
  console.log(username);
}
