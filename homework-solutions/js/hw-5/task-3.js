/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowelsAndConsonantsResult = '';

const vowelsList = ['a', 'e', 'i', 'o', 'u'];
let vowels = 0;

for (const x of word.toLowerCase()) {
    vowelsList.includes(x) ? vowels++ : vowels
}
vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${word.length - vowels} consonants`

export { vowelsAndConsonantsResult };
