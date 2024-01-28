export const letterChanges = (str) => {
  let newStr = str
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .replace(/[a-z]/gi, (char) => {
      if (char === "z") {
        return "a";
      } else {
        return String.fromCharCode(char.charCodeAt() + 1);
      }
    });

  let vowelStr = newStr.replace(/[aeiou]/gi, (vowel) => {
    return vowel.toUpperCase();
  });

  return vowelStr;
};

// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
