/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/

function getKeyByValue<T extends object>(obj: T, inputValue: T[keyof T]): keyof T | undefined {
  for (const key in obj) {
    if (obj[key] === inputValue) return key;
  }
}

const testObj = {
  name: 'John',
  surname: 'Wick',
};
console.log(getKeyByValue(testObj, 'Wick'));
console.log(getKeyByValue(testObj, 'wrongValue'));
