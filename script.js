
document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("searchBox");
    const paragraphs = document.querySelectorAll("p");

    searchBox.addEventListener("input", function() {
        const term = searchBox.value.toLowerCase();
        paragraphs.forEach(p => {
            if (p.textContent.toLowerCase().includes(term)) {
                p.style.display = "block";
            } else {
                p.style.display = "none";
            }
        });
    });
});
