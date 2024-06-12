let item = Array.from(document.getElementsByClassName("item"));
let body = document.querySelector("body");
let big = document.getElementById("false");

// pour chaque item set un clicklistener
item.forEach(function (img) {
  img.addEventListener("click", function () {
    let displayImg = document.createElement("img");
    displayImg.src = img.src.slice(39);
    displayImg.alt = img.alt;
    displayImg.style.width = "80vh";
    displayImg.style.position = "absolute";
    displayImg.style.zIndex = "999";
    displayImg.className = "deletable";
    document.body.appendChild(displayImg);

    // assombrir
    let overlay = document.createElement("div");
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "99";
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.className = "overlay";
    // pour éclaicir
    overlay.onclick = function quit() {
      eclaire();
      document.body.removeChild(document.querySelector(".deletable"));
    };
    document.body.appendChild(overlay);
    // fixation de la page
    body.style.overflow = "hidden";
    body.style.overflowY = "scroll !important";
    // désactiver le clic listener
    img.removeEventListener("click", this);
  });
});
