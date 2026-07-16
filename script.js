// Like button
const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        if (heart.classList.contains("fa-regular")) {
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
            heart.style.color = "red";
        } else {
            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
            heart.style.color = "white";
        }
    });
});

// Bottom navigation
const navIcons = document.querySelectorAll(".bottom-nav i");

navIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        navIcons.forEach(i => i.style.color = "white");
        icon.style.color = "#ff2d55";
    });
});

// Story click
const stories = document.querySelectorAll(".story");

stories.forEach((story) => {
    story.addEventListener("click", () => {
        alert("Story feature is coming soon!");
    });
});

console.log("Welcome to IshatGram 🚀");
