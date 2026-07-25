document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".button-item");

    console.log("Filter buttons found:", buttons.length);
    console.log("Items found:", items.length);

    if (buttons.length === 0) {
        console.error("No elements with class '.filter-btn' were found.");
        return;
    }

    if (items.length === 0) {
        console.error("No elements with class '.button-item' were found.");
        return;
    }

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Update active button
            document.querySelector(".filter-btn.active")?.classList.remove("active");
            button.classList.add("active");

            const filter = button.dataset.filter;

            items.forEach(item => {

                const tags = (item.dataset.tags || "").split(" ");

                if (filter === "all" || tags.includes(filter)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }

            });

        });

    });

});