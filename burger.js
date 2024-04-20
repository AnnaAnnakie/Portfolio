let feuilleDeStyle = window.document.styleSheets[0];

function toggleMenu() {
  let menu = document.querySelector(".menu");
  let header = document.querySelector("header");
  let main = document.querySelector("main");
  let body = document.querySelector("body");
  let img = document.querySelector(".menu-burger").firstElementChild;
  let overlay = document.querySelector(".overlay");

  if (menu.style.display === "block") {
    // disparition du menu burger
    menu.style.display = "none";
    menu.style.removeProperty("width");
    header.style.removeProperty("width");
    header.style.removeProperty("height");
    header.style.removeProperty("background-color");
    img.src = "img/buger.png";

    eclaire();
    window.removeEventListener("scroll", noscroll);
  } else {
    // apparition du menu burger
    menu.style.display = "block";
    if (window.innerWidth < "768") {
      header.style.width = "100%";
    } else {
      menu.style.width = "300px";
    }
    header.style.height = "100%";
    header.style.backgroundColor = "rgb(226, 82, 82)";
    img.src = "img/croix.png";

    assombrir();
    window.addEventListener("scroll", noscroll);
  }
}

function noscroll() {
  // Réinitialiser la position de défilement à 0
  window.scrollTo(0, 0);
}

function assombrir() {
  let overlay = document.createElement("div");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.zIndex = "99";
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.className = "overlay";
  document.body.appendChild(overlay);
}

function eclaire() {
  document.body.removeChild(document.querySelector(".overlay"));
}
