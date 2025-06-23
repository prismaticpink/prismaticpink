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
