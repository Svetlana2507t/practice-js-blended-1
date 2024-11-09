// Завдання 1
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

// const alertInput = document.querySelector("#alertInput");
// const btn = document.querySelector("#alertButton");
// btn.addEventListener("click", eventHandler);

// function eventHandler() {
//   console.log(alertInput.value);
// }

// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const leftInput = document.querySelector("#leftSwapInput");
const rightInput = document.querySelector("#rightSwapInput");
const swapBtn = document.querySelector("#swapButton");

swapBtn.addEventListener("click", swap);

function swap() {
  let leftVal = leftInput.value;
  leftInput.value = rightInput.value;
  rightInput.value = leftVal;
}
