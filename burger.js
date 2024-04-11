let feuilleDeStyle = document.styleSheets[0];

function toggleMenu() {
  let menu = document.querySelector(".menu");
  let header = document.querySelector("header");
  let main = document.querySelector("main");
  let body = document.querySelector("body");
  let img = document.querySelector(".menu-burger").firstElementChild;
  let overlay = document.querySelector(".overlay");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    menu.style.removeProperty("width");
    /*supprimerMediaQuery("max-witdh : 768px");*/
    header.style.removeProperty("height");
    header.style.removeProperty("background-color");
    img.src = "img/buger.png";

    eclaire();
    window.removeEventListener("scroll", noscroll);
  } else {
    menu.style.display = "block";
    menu.style.width = "300px";
    /*ajouterMediaQuery("max-width : 768px", "width : 767px");*/
    header.style.height = "100%";
    header.style.backgroundColor = "rgb(226, 82, 82)";
    img.src = "img/croix.png";

    assombrir();
    window.addEventListener("scroll", noscroll);
  }
}

function ajouterMediaQuery(mediaQuery, cssRules) {
  if (feuilleDeStyle.insertRule) {
    // Utiliser insertRule pour les navigateurs modernes
    feuilleDeStyle.insertRule(
      `@media ${mediaQuery} { ${cssRules} }`,
      feuilleDeStyle.cssRules.length
    );
  } else if (feuilleDeStyle.addRule) {
    // Utiliser addRule pour les anciens navigateurs IE
    feuilleDeStyle.addRule(
      `@media ${mediaQuery}`,
      cssRules,
      feuilleDeStyle.rules.length
    );
  }
}
function supprimerMediaQuery(mediaQuery) {
  var styleSheets = document.styleSheets; // Récupérer toutes les feuilles de style
  for (var i = 0; i < styleSheets.length; i++) {
    var rules = styleSheets[i].cssRules || styleSheets[i].rules; // Récupérer les règles CSS
    for (var j = 0; j < rules.length; j++) {
      // Vérifier si la règle est un media query et correspond à la requête spécifiée
      if (rules[j].type === 4 && rules[j].media.mediaText === mediaQuery) {
        styleSheets[i].deleteRule(j); // Supprimer la règle
      }
    }
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
