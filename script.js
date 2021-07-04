let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 350) {
    nav.classList.add("bg-navbar", "shadow");
  } else {
    nav.classList.remove("bg-navbar", "shadow");
  }
});
