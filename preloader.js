window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");

    loader.classList.add("preloader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("preloader")
    })
})