/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/

function validatePassword(password: string): boolean {
  const hasUpper = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasDigit = /[0-9]/.test(password)
  const spaceInPassword = password.trim() !== '';
  return hasUpper && hasLower && hasDigit && password.length >= 8 && spaceInPassword
}

const passwords = [
  'Qwerty123456',
  'Qwerty 123456',
  'qwerty123456',
  'QwertyQwerty',
  '123456789',
  'Qwerty1',
  '        '
]

const results = passwords.map((item) => validatePassword(item))
console.log(results)