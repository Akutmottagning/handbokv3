
document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("searchBox");
    const contentElements = document.querySelectorAll("p, h2, h3, h4, h5, h6");

    searchBox.addEventListener("input", function() {
        const term = searchBox.value.toLowerCase().trim();

        if (term === "") {
            contentElements.forEach(el => el.style.display = "block");
            return;
        }

        contentElements.forEach(el => {
            if (el.textContent.toLowerCase().includes(term)) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
    });
});
