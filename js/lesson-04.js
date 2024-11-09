// Завдання 1
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

const alertInput = document.querySelector("#alertInput");
const btn = document.querySelector("#alertButton");
btn.addEventListener("click", eventHandler);

function eventHandler() {
  console.log(alertInput.value);
}
