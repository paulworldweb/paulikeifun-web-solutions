document.addEventListener("DOMContentLoaded", () => {
  const hoverTargets = document.querySelectorAll(
    ".hero-image img, .btn, .intro-card, .service-card, .project-card, .section-box, .contact-box, .contact-details, .nav-links a, .logo"
  );

  hoverTargets.forEach((item) => {
    item.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-8px) scale(1.02)";
      item.style.boxShadow = "0 14px 30px rgba(0, 0, 0, 0.16)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0) scale(1)";
      item.style.boxShadow = "";
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("active");

      if (isOpen) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      } else {
        navLinks.classList.add("active");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
      }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
