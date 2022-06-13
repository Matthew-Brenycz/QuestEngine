
// Back to top button features
backTopButton = document.getElementById("back-to-top-button");

backTopButton.onclick = function() {backTopFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    backTopButton.style.display = "block";
  } else {
    backTopButton.style.display = "none";
  }
}

function backTopFunction() {
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
  document.body.scrollTop = 0; // Safari
}

