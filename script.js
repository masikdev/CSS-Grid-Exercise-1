const btnHamburger = document.getElementById("hamburger-btn");
const btnCloseMenu = document.querySelector(".close-icon") 
const menu = document.querySelector(".menu ul");

btnHamburger.addEventListener("click", (e)=>{
    menu.style.display = "grid";
    btnCloseMenu.style.display = "block";
    e.preventDefault();
});

const closeMenu = (e)=>{
    menu.style.display = "none";
    btnCloseMenu.style.display = "none";
    e.preventDefault();
};

btnCloseMenu.addEventListener("click", closeMenu);

// CloseHandler
document.addEventListener("click", (e)=>{
    if (!menu.contains(e.target) && !btnHamburger.contains(e.target)) {
        menu.style.display = "none"
        btnCloseMenu.style.display = "none";
    }
});