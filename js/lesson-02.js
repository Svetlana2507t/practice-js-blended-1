//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

const numbers = [12, 5, 35, 56, 2, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
  if (Array.isArray(numbers)) {
    console.log(...numbers);

    return Math.min(...numbers);
    //     let max = numbers[0];
    //     for (const number of numbers) {
    //       if (number > max) {
    //         max = number;
    //       }
    //     }
    //     return max;
  }
  return "Incoming parameter is not an array";
}
console.log(findSmallerNumber(numbers));
//----------------------------------------------------------
//Напишіть функцію getUniqueValues(arr), яка повертає масив,
//якій містить лише унікальні елементи.
const words = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "CSS",
  "JS",
  "Node.js",
  "JS",
  "React",
  "CSS",
  "React",
  "HTML",
  "Node.js",
];
function getUniqueValues(arr) {
  let uniqe = [];
  for (const value of arr) {
    if (!uniqe.includes(value)) {
      uniqe.push(value);
    }
  }
  return uniqe;
}
console.log(getUniqueValues(words));
//------------------------------------------------------------
//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
function getTotalSalary(salaries) {
  let sum = 0;
  const arr = Object.values(salaries);
  // console.log(arr);
  for (const value of arr) {
    sum += value;
  }
  return sum;
}
console.log(getTotalSalary(salaries));
//--------------------------------------------------------
//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 150, quantity: 100 },
];

function calcTotalPrice(stones, stonesName) {
  let totalPrice = 0;
  for (const stone of stones) {
    if (stone.name === stonesName) {
      totalPrice = stone.price * stone.quantity;
      return `${stonesName} : ${totalPrice}`;
    }
  }
}
console.log(calcTotalPrice(stones, "Смарагд"));
//------------------------------------------------------
//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

function getRandomEightDigitNumber() {
  return Math.floor(10000000 + Math.random() * 90000000);
}

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function calculatePrice(fruits) {
  const arr = [];
  for(const fruit of fruits){
    const obj = {...fruit};
      obj.price = obj.price * 0.8;
      obj.id = getRandomEightDigitNumber();
      arr.push(obj);
  } return arr;
} 
console.log(calculatePrice(fruits));
 