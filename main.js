const tabItems = document.querySelectorAll(".tabItem");
const tabContentItems = document.querySelectorAll(".tabContentItem");

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border to current tab
  this.classList.add("tabBorder");
  //Grab content items from DOM
  const tabContentItem = document.querySelector(`#${this.id}Content`);
  //Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tabBorder"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Listen for a tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
