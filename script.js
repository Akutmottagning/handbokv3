
document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("input", function () {
        const term = searchBox.value.toLowerCase().trim();
        const elements = Array.from(document.body.children);

        let showBlock = false;

        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];

            if (el.matches("h2, h3, h4, h5, h6")) {
                // Always start by hiding headings
                showBlock = false;
                el.style.display = "none";

                // Check if heading or anything under it matches the search term
                let j = i + 1;
                const subElements = [];
                while (j < elements.length && !elements[j].matches("h2, h3, h4, h5, h6")) {
                    subElements.push(elements[j]);
                    j++;
                }

                const headingMatches = el.textContent.toLowerCase().includes(term);
                const contentMatches = subElements.some(p => p.textContent.toLowerCase().includes(term));

                if (term === "" || headingMatches || contentMatches) {
                    el.style.display = "block";
                    subElements.forEach(p => p.style.display = "block");
                } else {
                    subElements.forEach(p => p.style.display = "none");
                }
            }
        }
    });
});
