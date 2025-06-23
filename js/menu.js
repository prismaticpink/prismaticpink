  document.addEventListener('DOMContentLoaded', () => {
    fetch('/menu.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('menu-container').innerHTML = html;
      })
      .catch(err => console.error('Failed to load menu:', err));
  });

  document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const asideMenu = document.querySelector('main aside');

  toggleBtn.addEventListener('click', function () {
    asideMenu.classList.toggle('open');
  });
});
