var elMap = document.getElementById('loc'); // HTML-элемент
var msg = 'Sorry, we were unable to get your location.'; // Сообщение об отсутствии данных о местоположении
if (Modernizr.geolocation) { // Поддерживается ли геолокация
navigator.geolocation.getCurrentPosition(success, fail); // Запрашиваем координаты
elMap.textContent = 'Определение местонахождения...'; // Уведомляем об операции определения...
} else { // Не поддерживается
elMap.textContent = msg; // Добавляем сообщение
}
function success(position) { // Получили местоположение
msg = '<h3>Longitude:<br>'; // Создаем сообщение
msg += position.coords.latitude + '</h3>'; // Добавляем долготу
msg += '<h3>Latitude:<br>'; // Создаем сообщение
msg += position.coords.longitude + '</h3>'; // Добавляем широту
elMap.innerHTML = msg; // Выводим местоположение
}
function fail(msg) { // Не получили местоположение
elMap.textContent = msg; // Выводим сообщение
console.log(msg.code); // Записываем ошибку
}