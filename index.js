const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {    
    navToggle.classList.toggle("active")


    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
    } else {
        primaryNav.setAttribute("data-visible", true)
    }
})


