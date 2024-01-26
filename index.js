window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0);

    const navArrow = document.querySelector(".arrow-nav");
    
    if (window.scrollY > 83) {
        navArrow.style.visibility = "visible";
    }
    else{
        navArrow.style.visibility = "hidden";
    };
    
})

