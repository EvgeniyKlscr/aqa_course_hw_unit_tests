/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (number === 0) return 0
  if (number < 10) {
    return number
  } else {
    let sum = 0
    for (const x of number.toString().split('').map((x) => +x)) {
      sum += x
    }
    return digitalRoot(sum)
  }
}

/*
another solution

function digitalRoot2(number) {
  do {
    number = number.toString().split('').reduce((acc, x) => acc + +x, 0)
  } while (number > 9)
   return number
}
*/

export { digitalRoot };
