document.addEventListener("DOMContentLoaded", () => {
  fetch("sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar-container").innerHTML = data;
    })
    .catch((error) => console.error("Ошибка загрузки sidebar:", error));
});

//WhatsApp
function showInput() {
  document.getElementById("inputContainer").style.display = "block";
}

function sendToWhatsApp() {
  const message = document.getElementById("messageInput").value;
  const teacherPhone = "79887880672"; // Номер преподавателя (без +)
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${teacherPhone}?text=${encodedMessage}`;

  if (message) {
    window.open(whatsappUrl, "_blank");
  } else {
    alert("Введите сообщение!");
  }
}


// Генерация данных активности
const activityData = {};
const startDate = new Date('2024-01-01');
for (let i = 0; i < 365; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  const dateStr = date.toISOString().split('T')[0];
  activityData[dateStr] = Math.floor(Math.random() * 5); // 0–4 события
}

// Создание сетки
const grid = document.getElementById('activityGrid');
for (let i = 0; i < 365; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  const dateStr = date.toISOString().split('T')[0];
  const level = activityData[dateStr] || 0;

  const day = document.createElement('div');
  day.className = `day level-${level}`;
  day.setAttribute('data-tooltip', `${dateStr}: ${level} событий`);
  grid.appendChild(day);
}