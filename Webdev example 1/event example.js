let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = "false";


menu.style.marginleft = -300px;

function menuToggle() {
    if (menuStatus === "false") {
        menu.style.marginleft = 0px;
        menuStatus = "true";

    }
    else if (menuStatus === "true") {
        menu.style.marginleft = -300px;
        menuStatus = "false";

    }

    menuBtn.onclick = menutoggle;

}