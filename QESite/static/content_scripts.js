// Variables for the table of contents plugin and dropdown button
const tableOfContents = document.getElementById("table-of-contents");
const accordionControl = document.getElementById("accordion-control");

// Function calls
window.addEventListener("load", checkWindowWidth);
window.addEventListener("resize", checkWindowWidth);
accordionControl.addEventListener("click", changeAccordionButtonText);

// If tablet/mobile device width, show the dropdown button and hide the 
// table of contents under it, unless the button has already been clicked to open it.
function checkWindowWidth() {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 992) {
    tableOfContents.classList.add("show");
  }
  if (windowWidth < 992 && accordionControl.classList.contains("collapsed")) {
    tableOfContents.classList.remove("show");
  }
}

// Change the text of the dropdown button to "Open TOC"/"Close TOC", after it is 
// clicked to close/open it.
function changeAccordionButtonText() {
    if (accordionControl.classList.contains("collapsed")) {
        accordionControl.innerHTML = "Close Table of Contents";
    }
    else {
        accordionControl.innerHTML = "Open Table of Contents";
    }
}