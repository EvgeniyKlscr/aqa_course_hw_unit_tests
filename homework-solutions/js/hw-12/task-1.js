/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}
delayTwoSeconds(() => console.log('After 2 seconds')) 

const promiseResolve = new Promise((res) => res(1))
promiseResolve.then((result) => console.log(result))

const promiseReject = new Promise((resolve, reject) => reject('Promise failed'));
promiseReject.catch((rejected) => console.log(rejected));

function promiseNumber(number) {
  return new Promise((resolve) => resolve(number));
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((result) => result.forEach((res) => console.log(res)))
  .catch((rej) => console.log(rej));

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((result) => result.forEach((res) => console.log(res)))
  .catch((rej) => console.log(rej));

async function promAll() {
  try {
    const result = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
      result.forEach((res) => console.log(res))
  } catch (error) {
    console.log(error);
  }
}
promAll()

async function promAllSettled() {
  try {
    const result = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
      result.forEach((res) => console.log(res))
  } catch (error) {
    console.log(error);
  }
}
promAllSettled()
