/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];
/*
// first solution

function sortedByVowels(wordsArr) {
  const vowelsList = 'aeiou';

  return wordsArr.sort((a, b) => {
    if (
      a.split('').reduce((acc, x) => {
        if (vowelsList.includes(x)) acc++;
        return acc;
      }, 0) <
      b.split('').reduce((acc, x) => {
        if (vowelsList.includes(x)) acc++;
        return acc;
      }, 0)
    )
      return -1;

    if (
      a.split('').reduce((acc, x) => {
        if (vowelsList.includes(x)) acc++;
        return acc;
      }, 0) >
      b.split('').reduce((acc, x) => {
        if (vowelsList.includes(x)) acc++;
        return acc;
      }, 0)
    )
      return 1;

    return 0;
  });
}
 */

// second solution

function sortedByVowels(wordsArr) {
  const vowelsList = 'aeiou';
  const countVowels = (word) => {
    return word.split('').reduce((acc, x) => {
      if (vowelsList.includes(x)) acc++;
      return acc;
    }, 0);
  };

  return wordsArr.sort((a, b) => countVowels(a) - countVowels(b));
}
export { sortedByVowels };
