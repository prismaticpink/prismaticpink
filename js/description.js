console.log("description.js loaded");

document.querySelectorAll(".item").forEach(item => {
    const description = item.querySelector(".description");

    item.addEventListener("mouseenter", () => {
        description.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
        description.style.opacity = "0";
    });

    item.addEventListener("mousemove", (e) => {
        description.style.left = `${e.clientX + 12}px`;
        description.style.top = `${e.clientY + 12}px`;
    });
});

console.log("description.js loaded");

document.querySelectorAll(".item").forEach(item => {
    const description = item.querySelector(".description-buttons");

    item.addEventListener("mouseenter", () => {
        description.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
        description.style.opacity = "0";
    });

    item.addEventListener("mousemove", (e) => {
        description.style.left = `${e.clientX + 12}px`;
        description.style.top = `${e.clientY + 12}px`;
    });
});
