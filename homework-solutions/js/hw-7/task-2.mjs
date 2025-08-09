/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word === 'string') {
    const result = word.split('').reverse().join('');
    return result.toLowerCase() === word.toLowerCase() ? true : false
  } else {
    return false;
  }
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence === 'string' && sentence.length) {
    const splitted = sentence
      .split(' ')
      .filter((x) => x !== '')
      .sort((a, b) => b.length - a.length);
    const length = splitted[0].length;
    const words = splitted.filter((x) => x.length >= length);

    return words;
  } else {
    return [];
  }
}

export { isPalindrom, findLongestWords };
