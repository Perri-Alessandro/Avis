let scrolla = document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const icons = document.querySelector(".row.my-2");
  const logoNav = document.querySelector(".avis_monte_icon");
  const goccia = document.querySelector("#goccia");
  if (window.scrollY > icons.offsetHeight) {
    navbar.classList.add("fixed-top");
    logoNav.classList.add("transitionnn");
  } else {
    navbar.classList.remove("fixed-top");
    logoNav.classList.remove("transitionnn");
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
