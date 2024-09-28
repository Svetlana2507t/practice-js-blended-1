//~ Створи функцію яка приймає число від 0 до 59  і визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).
function defineQuarter(min) {
  if (min >= 0 && min <= 15) {
    return "First quarter";
  } else if (min > 15 && min <= 30) {
    return "Second quarter";
  } else if (min > 30 && min <= 45) {
    return "Third quarter";
  } else if (min > 45 && min <= 59) {
    return "Forth quarter";
  } else {
    return "The value of minutes in invalid";
  }
}

console.log(defineQuarter(59));
