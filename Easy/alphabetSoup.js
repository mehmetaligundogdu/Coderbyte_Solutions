export const alphabetSoup = (str) => {
  const arr = str.split(""); // split() metodu stringi array'e çevirir. Çünkü .sort() metodu sadece array'i sıralar.
  const sortArr = arr.sort(); // sort() metodu defaultta string arrayları alfabetik sıraya göre sıralar.
  return sortArr.join(""); // join() metodu array'i stringe çeviririz.

  // return str.split("").sort().join(""); // tek satırda da yazılabilir.
};

// Alphabet Soup
// Have the function AlphabetSoup(str) take the str string parameter being passed and
// return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume
// numbers and punctuation symbols will not be included in the string.
