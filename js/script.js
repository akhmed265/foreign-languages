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

//Activity//
const table = document.querySelector("table");
const year = 2025;
const month = 5; // Февраль (0–11)
const daysInMonth = new Date(year, month + 1, 0).getDate(); // 31 дней
const firstDay = new Date(year, month, 1).getDay(); // 6 (сб)
const today =  new Date().getDate(); // Сегодня 18 Март 2025

let day = 1;
let row = document.createElement("tr");

// Заполняем пустые ячейки до первого дня месяца
for (let i = 0; i < (firstDay || 7) - 1; i++) {
  const cell = document.createElement("td");
  row.appendChild(cell);
}

// Массив для текстового описания уровней активности
const activityLabels = [
  "Нет активности",
  "Низкая активность",
  "Средняя активность",
  "Высокая активность",
  "Очень высокая активность",
];

// Заполняем дни месяца
for (let i = 0; i < daysInMonth; i++) {
  if (row.children.length === 7) {
    table.appendChild(row);
    row = document.createElement("tr");
  }
  const cell = document.createElement("td");
  cell.textContent = day;

  if (day <= today) {
    // Для прошедших и текущего дня добавляем активность
    const activityLevel = Math.floor(Math.random() * 5);
    cell.classList.add(`activity-${activityLevel}`);
    cell.setAttribute("title", `День ${day}: ${activityLabels[activityLevel]}`);
    // Выделяем текущий день
    if (day === today) {
      cell.classList.add("today");
    }
  } else {
    // Для будущих дней добавляем класс future и убираем активность
    cell.classList.add("future");
    cell.setAttribute("title", `День ${day}: Не наступил`);
  }

  row.appendChild(cell);
  day++;
}

// Заполняем оставшиеся ячейки в последней строке
while (row.children.length < 7) {
  row.appendChild(document.createElement("td"));
}
table.appendChild(row);
//Activity END//


// Для index.html
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.courses__button');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const courseItem = button.closest('.courses__item');
          const courseId = courseItem.dataset.courseId || 'default';
          window.location.href = `beginners-eng.html?course=${courseId}`;
      });
  });
});