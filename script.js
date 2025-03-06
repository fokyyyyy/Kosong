// Mengupdate gambar di halaman secara dinamis dengan Google Drive direct link
const images = document.querySelectorAll("img");
const imageLinks = {
  stunting: "img/DSC_8885.JPG",
  pendidikan: "img/IMG_0393.JPG",
  umkm: "img/IMG_1534.JPG",
  mitigasi: "img/IMG_2592.JPG",
  pengembangan: "img/IMG_2726.JPG",
};

// Mengubah semua gambar dengan link dari Google Drive
images.forEach((img) => {
  const altText = img.getAttribute("alt").toLowerCase();
  if (imageLinks[altText]) {
    img.src = imageLinks[altText];
  }
});

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
