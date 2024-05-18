const parentNode = document.getElementById("parent-list");

parentNode.addEventListener("click", function (e) {
  // e.target is the clicked element!
  // If it was a list item
  if (e.target && e.target.nodeName == "LI") {
    // List item found!  Output the ID!
    console.log("List item ", e.target.id, " was clicked!");
  }
});
