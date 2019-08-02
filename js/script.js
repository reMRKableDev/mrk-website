/* Hamburger Menu Change */
function menuChange(menu) {
  menu.classList.toggle("change");
}

/* Active Menu Functionality */
let mainNav = document.getElementById("js-navItems");
let navBarToggle = document.getElementById("js-hamburgerToggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active-nav-items");
});

/* Sticky Navbar Functionality */
window.onscroll = function() {
  stickyNavbar();
};

let navbar = document.getElementById("js-stickyNav");
let sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
}
/* Contact Form */
let contactform = document.getElementById("contactform");
contactform.setAttribute(
  "action",
  "//formspree.io/" + "malcolm.kente" + "@" + "reMRKabledev" + "." + "com"
);
