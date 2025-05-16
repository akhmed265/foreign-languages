document.addEventListener('DOMContentLoaded', () => {
  fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebar-container').innerHTML = data;
    })
    .catch(error => console.error('Ошибка загрузки sidebar:', error));
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('activity.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('activity').innerHTML = data;
    })
  .catch(error => console.error('Ошибка загрузки activity:', error));
});