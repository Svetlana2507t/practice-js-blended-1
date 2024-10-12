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
function getUniqueValues(arr){
  let uniqe = [];
  for (const value of arr) {
    if (!uniqe.includes(value)){
      uniqe.push(value);
    }
  } return uniqe;
}
console.log(getUniqueValues(words));
