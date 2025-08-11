/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  let missedNum;
  sorted.forEach((x, index, arr) => {
    if (arr[0] !== 1) missedNum = 1;
    if (x + 1 !== arr[index + 1] && index + 1 <= arr.length - 1) missedNum = x + 1;
  });
  if (!missedNum) return sorted[sorted.length - 1] + 1;
  return missedNum;
}

export { findMissingNumber };
