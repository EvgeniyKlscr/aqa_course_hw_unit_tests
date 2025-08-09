/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...args) {
  return args.flat();
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const splitted = sentence.split(' ').filter((x) => x !== '');
  let modifiedWords = [];

  for (let i = 0; i < splitted.length; i++) {
    let word = splitted[i].toLowerCase();

    if (splitted.length > 1) {
      i ? modifiedWords.push(word[0].toUpperCase() + word.slice(1)) : modifiedWords.push(word);
    } else {
      modifiedWords.push(word);
    }
  }

  return modifiedWords.join('_');
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  let a = 0;
  let b = 1;

  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
  }
  return b;
}

/*
another solution

function fibonacci2(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}
*/

export { mergeArrays, fibonacci, devideBy };
