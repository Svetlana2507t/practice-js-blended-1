//~ Створи функцію яка приймає число від 0 до 59  і визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).
// function defineQuarter(min) {
//   if (min >= 0 && min <= 15) {
//     return "First quarter";
//   } else if (min > 15 && min <= 30) {
//     return "Second quarter";
//   } else if (min > 30 && min <= 45) {
//     return "Third quarter";
//   } else if (min > 45 && min <= 59) {
//     return "Forth quarter";
//   } else {
//     return "The value of minutes in invalid";
//   }
// }

// console.log(defineQuarter(59));

//~ Напиши функцію яка запитує у користувача ведення числа  1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// let valueSeason = prompt("Введіть число від 1 до 4");

// function getSeason() {
//   let valueSeason = prompt("Введіть число від 1 до 4");
//   let result = "";
//   switch (Number(valueSeason)) {
//     case 1:
//       result = "Зима";
//       break;

//     case 2:
//       result = "Весна";
//       break;

//     case 3:
//       result = "Літо";
//       break;

//     case 4:
//       result = "Осінь";
//       break;

//     default:
//       result = " Вивчи пори року!";
//   }
//   return result;
// }

// console.log(getSeason());

//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max і поверніть результат з функції

// function logNumbers(min, max) {
//   let total = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(logNumbers(2, 6));

// Напишіть функцію fizzBuzz яка приймає число
//Якщо число ділитися на 3 повертати fizz
//якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else {
    return num;
  }
}
console.log(fizzBuzz(9));
