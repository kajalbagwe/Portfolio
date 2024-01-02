document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove "active" class from all links and sections
            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            sections.forEach((section) => section.classList.remove("active"));

            // Add "active" class to the clicked link and corresponding section
            this.classList.add("active");
            sections[index].classList.add("active");
        });
    });
});
