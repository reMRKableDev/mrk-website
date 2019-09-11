// When the user scrolls down 20px from the top of the document, show the button
/* window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
} */

// When the user clicks on the button, scroll to the top of the document
/* function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} */
/* Contact Form */
let contactform = document.getElementById("contactform");
contactform.setAttribute(
  "action",
  "//formspree.io/" + "malcolm.kente" + "@" + "reMRKabledev" + "." + "com"
);
