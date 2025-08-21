/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (Object.hasOwn(character, 'name') && Object.hasOwn(character, 'age')) characters.push(character);
  else throw new Error('Not valid object');
}

function getCharacter(name) {
  return characters.find(({ name: arrName }) => arrName === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') throw new Error('Incorrect type of age');
  const result = characters.filter(({ age }) => age >= minAge);
  if (!result.length) throw new Error('Not found');
  return result;
}

function updateCharacter(name, newCharacter) {
  if (getCharacter(name)) {
    const neededObject = getCharacter(name);
    neededObject.name = newCharacter.name;
    neededObject.age = newCharacter.age;
  } else throw new Error('Not found');
}

function removeCharacter(name) {
  const index = characters.findIndex((x) => x.name === name);
  if (index >= 0) characters.splice(index, 1);
  else throw new Error('Not found');
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
