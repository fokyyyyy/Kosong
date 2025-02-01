// Smooth scrolling for navigation links
document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Hamburger menu functionality for mobile view
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

if (hamburgerMenu && navbarNav) {
  hamburgerMenu.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
    hamburgerMenu.classList.toggle("open");
  });
}

// Close menu on outside click
document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburgerMenu.classList.remove("open");
  }
});
