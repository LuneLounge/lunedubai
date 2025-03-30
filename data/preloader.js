
document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader after page fully loads
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 1000); // 1-second delay for smoother effect
});
// Show preloader when navigating between pages
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
            e.preventDefault();
            document.getElementById("preloader").style.display = "flex";
            setTimeout(() => {
                window.location.href = href;
            }, 800); // Delay before changing page
        }
    });
});

