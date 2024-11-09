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

// const leftInput = document.querySelector("#leftSwapInput");
// const rightInput = document.querySelector("#rightSwapInput");
// const swapBtn = document.querySelector("#swapButton");

// swapBtn.addEventListener("click", swap);

// function swap() {
//   let leftVal = leftInput.value;
//   leftInput.value = rightInput.value;
//   rightInput.value = leftVal;
// }
//---------------------------------------------------------------
// Завдання 3
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// */

// const input = document.querySelector("#passwordInput");
// const btn = document.querySelector("#passwordButton");

// btn.addEventListener("click", handleClick);

// function handleClick() {

//   // console.log(input.type);

//   if (input.type === "text") {
//     input.type = 'password';
//     btn.textContent = "Pозкрити";
//   } else {
//     input.type = 'text';
//     btn.textContent = "Приховати";
//   }
// }
//----------------------------------------------------------------------
// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.

const smallBtn = document.querySelector("#decrease");
const bigBtn = document.querySelector("#increase");
const box = document.querySelector("#box");

smallBtn.addEventListener("click", decreaseClick);
bigBtn.addEventListener("click", increaseClick);

function decreaseClick() {
  let boxWidth = parseInt(getComputedStyle(box).width);
  let boxHeight = parseInt(getComputedStyle(box).height);
  boxWidth -= 10;
  boxHeight -= 10;
  box.style.width = `${boxHeight}px`;
  box.style.height = `${boxHeight}px`;
}

function increaseClick() {
  let boxWidth = parseInt(getComputedStyle(box).width);
  let boxHeight = parseInt(getComputedStyle(box).height);
  boxWidth += 10;
  boxHeight += 10;
  box.style.width = `${boxHeight}px`;
  box.style.height = `${boxHeight}px`;
}

// console.log(getComputedStyle(box).height);
