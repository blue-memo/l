

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".timeline-dot");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Scroll to section when dot is clicked
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const targetId = dot.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Toggle mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Scroll logic
  window.addEventListener("scroll", () => {
    let currentSection = sections[0].getAttribute("id"); // default to first section

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const buffer = 100; // to trigger a little earlier

      if (window.scrollY >= sectionTop - buffer) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update nav links
    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSection}`
      );
    });

    // Update timeline dots
    dots.forEach(dot => {
      dot.classList.toggle(
        "active",
        dot.getAttribute("data-target") === currentSection
      );
    });

    // Show/hide scroll-to-top button
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Scroll to top on button click
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
