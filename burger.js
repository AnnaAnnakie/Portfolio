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
    body.style.removeProperty("overflow");
    body.style.removeProperty("overflow-y");

    eclaire();
  } else {
    // apparition du menu burger
    menu.style.display = "block";
    if (window.innerWidth < "1080") {
      header.style.width = "100%";
    } else {
      menu.style.width = "300px";
    }
    header.style.height = "100%";
    header.style.backgroundColor = /*"rgb(226, 82, 82)"*/ "#b23a48";
    img.src = "img/croix.png";
    body.style.overflow = "hidden";
    body.style.overflowY = "scroll !important";

    assombrir();
  }
}

function assombrir() {
  let overlay = document.createElement("div");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.width = "100%";
  overlay.style.height = "max-content";
  overlay.style.zIndex = "99";
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.className = "overlay";
  overlay.onclick = function quit() {
    toggleMenu();
  };
  document.body.appendChild(overlay);
}

function eclaire() {
  document.body.removeChild(document.querySelector(".overlay"));
}
