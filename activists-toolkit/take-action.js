var fullItemList = document.getElementById ("my-list");
fullItemList.addEventListener("click", checkOffItem);

function checkOffItem (clicked) {
   if (clicked.target.tagName == "LI") {
       clicked.target.classList.toggle("all-done");
   }
}