export const exOh = (str) => {
  let xCounter = 0;
  let oCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xCounter++;
    }
    if (str[i] === "o") {
      oCounter++;
    }
  }
  if (xCounter === oCounter) {
    return true;
  } else {
    return false;
  }
};

/**
 * Have the function exOh(str) take the str parameter being passed and return
 * the string true if there is an equal number of x's and o's, otherwise return
 * the string false. Only these two letters will be entered in the string, no
 * punctuation or numbers. For example: if str is "xooxxxxooxo" then the output
 * should return false because there are 6 x's and 5 o's.
 */
