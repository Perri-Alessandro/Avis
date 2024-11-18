let scriviHero = document.addEventListener("DOMContentLoaded", () => {
  const topElement = document.getElementById("heroP1");
  const bottomElement = document.getElementById("heroP2");

  const preparaText = (element, text) => {
    element.textContent = ""; // Svuota il testo esistente, lasciato solo per
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.visibility = "hidden"; // Nasconde inizialmente ogni lettera
      element.appendChild(span);
    });
  };

  const digita = (element, text, index = 0) => {
    const spans = element.querySelectorAll("span");
    if (index < spans.length) {
      spans[index].style.visibility = "visible";
      setTimeout(() => digita(element, text, index + 1), 110);
    }
  };

  preparaText(topElement, "Io Dono Sangue...");
  preparaText(bottomElement, "Non So Per Chi, Ma So Perchè!");

  digita(topElement, "Io Dono Sangue...", 0);

  setTimeout(
    () => digita(bottomElement, "Non So Per Chi, Ma So Perchè!", 0),
    2100
  );
});

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
  const linkPath = new URL(link.href, window.location.origin).pathname; // assicura che linkPath contenga solo il percorso relativo (es. /assets/chi_siamo.html) senza dominio e protocollo.//
  const currentPath = window.location.pathname; //Contiene il percorso della pagina corrente (es. /assets/chi_siamo.html o / per la radice).//
  if (
    linkPath === currentPath ||
    (currentPath === "/" && linkPath.endsWith("/index.html"))
  ) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
