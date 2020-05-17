// Hide frame by default
document.getElementById('framePreview').style.display = 'none';
var listItems = document.getElementsByClassName("leaderboard-list-item");
var i;
// Iterate over accordion and add click listeners
for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        showFrame();
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
