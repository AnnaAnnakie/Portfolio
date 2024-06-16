let item = Array.from(document.getElementsByClassName("item"));
let body = document.querySelector("body");
let big = document.getElementById("false");

// pour chaque item set un clicklistener
item.forEach(function (img) {
  img.addEventListener("click", function () {
    let displayImg = document.createElement("img");
    displayImg.src = img.src.slice(40);
    displayImg.alt = img.alt;
    displayImg.style.width = "80vh";
    displayImg.style.position = "fixed";
    displayImg.style.zIndex = "999";
    displayImg.style.left = "30%";
    displayImg.style.top = "10vh";
    displayImg.className = "deletable";
    document.body.appendChild(displayImg);

    // assombrir
    let overlay = document.createElement("div");
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "99";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.className = "overlay";
    // pour éclaicir
    overlay.onclick = function quit() {
      eclaire();
      body.style.removeProperty("overflow");
      body.style.removeProperty("overflow-y");
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
