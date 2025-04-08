const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.timeline-dot');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
    if (dot.getAttribute('data-target') === current) {
      dot.classList.add('active');
    }
  });
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const targetId = dot.getAttribute('data-target');
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// menu box
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
