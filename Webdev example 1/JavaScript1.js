let toggleNavStatus = false;

let togglenav = function () {
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUL = document.querySelector(".nav-sidebar ul");
    let getSideBarTitle = document.querySelector(".nav-sidebar span");
    let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");


    if (toggleNavStatus === false) {

        getSideBarUL.style.visibility = "visible";
        getSideBar.style.width = "272px";
        getSideBarTitle.style.opacity = "0.5";

        let arrayLength = getSideBarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            getSideBarLinks[i].style.opacity = 1;
        }
        toggleNavStatus = true;
    }
        else if (toggleNavStatus === true) {
              
                getSideBar.style.width = "272px";
                getSideBarTitle.style.opacity = "0";

                let arrayLength = getSideBarLinks.length;

                for (let i = 0; i < arrayLength; i++) {
                    getSideBarLinks[i].style.opacity = 0;
        }
        getSideBarUL.style.visibility = "hidden";

                toggleNavStatus = true;
        }
    
}