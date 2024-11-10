document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const icons = document.querySelector(".row.my-2");
  if (window.scrollY > icons.offsetHeight) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});
