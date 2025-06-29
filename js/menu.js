  document.addEventListener('DOMContentLoaded', () => {
    fetch('/menu.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('menu-container').innerHTML = html;
      })
      .catch(err => console.error('Failed to load menu:', err));
  });

document.addEventListener('DOMContentLoaded', () => {

  fetch('/menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu-container').innerHTML = html;
    })
    .catch(err => console.error('Failed to load menu:', err));

  const toggleBtn = document.getElementById('menu-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
});

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show button after scrolling down 100px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });

    // Scroll smoothly to top
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
