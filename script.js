//your code here!

const list = document.getElementById("infi-list");
let count = 1;

// Add 10 items initially
for (let i = 0; i < 10; i++) {
  addListItem();
}

// Function to add one list item
function addListItem() {
  const li = document.createElement("li");
  li.textContent = `Item ${count++}`;
  list.appendChild(li);
}

// Listen for scroll event
list.addEventListener("scroll", () => {
  // If user scrolled to the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 new items
    addListItem();
    addListItem();
  }
});
