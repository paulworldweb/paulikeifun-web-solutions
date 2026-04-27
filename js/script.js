document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // HOVER EFFECTS
  // =========================
  const hoverTargets = document.querySelectorAll(
    ".hero-image img, .btn, .intro-card, .service-card, .project-card, .section-box, .contact-box, .contact-details, .nav-links a, .logo"
  );

  hoverTargets.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-8px) scale(1.02)";
      item.style.boxShadow = "0 14px 30px rgba(0, 0, 0, 0.16)";
      item.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0) scale(1)";
      item.style.boxShadow = "";
    });
  });

  // =========================
  // HAMBURGER MENU
  // =========================
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Only run if both hamburger button and menu exist
  if (menuToggle && navLinks) {
    // When hamburger is clicked
    menuToggle.addEventListener("click", (e) => {
      // Stop click from bubbling to the document
      e.stopPropagation();

      // Toggle menu open/close
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");

      // Update accessibility state
      const expanded = menuToggle.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    // Prevent clicks inside the menu from closing it immediately
    navLinks.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Close menu when any nav link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  }
});
