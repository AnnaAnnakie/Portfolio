let feuilleDeStyle = document.styleSheets[0];

function toggleMenu() {
  let menu = document.querySelector(".menu");
  let header = document.querySelector("header");
  let main = document.querySelector("main");
  let body = document.querySelector("body");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    menu.style.removeProperty("width");
    /*supprimerMediaQuery("max-witdh : 768px");*/
    header.style.removeProperty("height");
    header.style.removeProperty("background-color");
    body.style.removeProperty("overflow");
  } else {
    menu.style.display = "block";
    menu.style.width = "300px";
    /*ajouterMediaQuery("max-width : 768px", "width : 767px");*/
    header.style.height = "100%";
    header.style.backgroundColor = "rgb(226, 82, 82)";
    body.style.overflow = "hidden";
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
