const mobileHero = document.querySelector("#heroMobile");
const desktopHero = document.querySelector("#heroDesktop");
const mobileTopElement = document.querySelector("#heroMobile .heroP1");
const mobileBottomElement = document.querySelector("#heroMobile .heroP2");
const desktopTopElement = document.querySelector("#heroDesktop .heroP1");
const desktopBottomElement = document.querySelector("#heroDesktop .heroP2");
let currentMode = "";

const updateHeroVisibility = () => {
  const screenWidth = window.innerWidth;
  let newMode = screenWidth <= 850 ? "mobile" : "desktop";

  if (newMode === currentMode) return;
  currentMode = newMode;

  let topElement, bottomElement;
  if (screenWidth <= 850) {
    mobileHero.style.display = "block";
    desktopHero.style.display = "none";
    topElement = mobileTopElement;
    bottomElement = mobileBottomElement;
  } else {
    mobileHero.style.display = "none";
    desktopHero.style.display = "block";
    topElement = desktopTopElement;
    bottomElement = desktopBottomElement;
  }

  const preparaText = (element, text) => {
    element.textContent = ""; // Svuota il testo esistente, lasciato solo per spazio elemento in pagina
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.visibility = "hidden"; // Nasconde inizialmente ogni lettera
      element.appendChild(span);
    });
  };

  const digita = (element, index = 0, callback = null) => {
    const spans = element.querySelectorAll("span");
    if (index < spans.length) {
      spans[index].style.visibility = "visible";
      setTimeout(() => digita(element, index + 1, callback), 110);
    } else if (callback) {
      setTimeout(callback, 300);
    }
  };

  preparaText(topElement, "Io Dono Sangue...");
  preparaText(bottomElement, "Non So Per Chi, Ma So Perchè!");

  setTimeout(() => {
    digita(topElement, 0, () => {
      digita(bottomElement, 0);
    });
  }, 320);
};

window.addEventListener("load", updateHeroVisibility);
window.addEventListener("resize", updateHeroVisibility);

// ------------------------------------------------------------------------------------------------------------------------------------------

let scrolla = document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const icons = document.querySelector(".row.my-2");
  const logoNav = document.querySelector(".avis_monte_icon");
  // const goccia = document.querySelector("#goccia");
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
  const linkPath = new URL(link.href, window.location.origin).pathname; // assicura che linkPath contenga solo il percorso relativo (es. /assets/chi_siamo.html) senza dominio e protocollo.//
  const currentPath = window.location.pathname; //Contiene il percorso della pagina corrente
  if (
    linkPath === currentPath ||
    (currentPath === "/" && linkPath.endsWith("/index.html"))
  ) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
