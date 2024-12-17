let tg = window.Telegram.WebApp;
tg.expand();

// Настройка цвета главной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

// Функция для настройки главной кнопки
function setMainButton(text, itemValue) {
    tg.MainButton.setText(text);
    item = itemValue;
    tg.MainButton.show();
}

// Обработчик для кнопки
btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        setMainButton("трек сюда", "1");
    }
});



// Отправка данных при нажатии на главную кнопку
tg.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});