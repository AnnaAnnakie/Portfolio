let item = Array.from(document.getElementsByClassName("item"));
let body = document.querySelector("body");
let big = document.getElementById('false');

// pour chaque item set un clicklistener
item.forEach(function (img){
    if(big.id == "true"){

    }else{
        img.addEventListener("click", clic(img));
    }
});

function clic(img){
    img.style.width = "fit-content";
    img.style.position = "absolute";
    img.style.zIndex = "999";

    // assombrir
    let overlay = document.createElement("div");
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "99";
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    // fixation de la page
    body.style.overflow = "hidden";
    body.style.overflowY = "scroll !important";

    // désactiver le clic listener
    img.removeEventListener(click)
    big.id = "true";
}