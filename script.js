
document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("searchBox");
    const contentElements = document.querySelectorAll("p, h2, h3, h4, h5, h6");

    searchBox.addEventListener("input", function() {
        const term = searchBox.value.toLowerCase();
        contentElements.forEach(el => {
            if (el.textContent.toLowerCase().includes(term)) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
    });
});
