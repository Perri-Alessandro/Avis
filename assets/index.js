let scrolla = document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const icons = document.querySelector(".row.my-2");
  if (window.scrollY > icons.offsetHeight) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});

const navLinks = document.querySelectorAll("header > nav div > div div a");
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
