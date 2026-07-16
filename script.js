// Splash Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        const splash = document.getElementById("splash");
        const app = document.getElementById("app");

        splash.style.opacity = "0";

        setTimeout(() => {
            splash.style.display = "none";
            app.style.display = "block";
        }, 500);
    }, 2500);
});

// Like Button
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-heart")) {

        if (e.target.classList.contains("fa-regular")) {
            e.target.classList.remove("fa-regular");
            e.target.classList.add("fa-solid");
            e.target.style.color = "#ff3040";
        } else {
            e.target.classList.remove("fa-solid");
            e.target.classList.add("fa-regular");
            e.target.style.color = "#fff";
        }

    }
});

// Bottom Navigation
const nav = document.querySelectorAll(".bottom-nav i");

nav.forEach(icon => {

    icon.addEventListener("click", () => {

        nav.forEach(i => i.style.color = "#fff");

        icon.style.color = "#ff2d55";

    });

});

// Story Click
document.querySelectorAll(".story").forEach(story => {

    story.addEventListener("click", () => {

        alert("Story feature coming soon 🚀");

    });

});

console.log("Welcome to IshatGram");
