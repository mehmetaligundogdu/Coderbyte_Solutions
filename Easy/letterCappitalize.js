export const letterCapitalize = (str) => {
  let newStr = str.replace(/[^a-zA-Z ]/g, "").split(" ");

  let capStr = newStr.map((w) => {
    return w.charAt(0).toUpperCase().concat(w.slice(1));
  });
  return capStr.join(" ");
};

// Using the JavaScript language, have the function LetterCapitalize(str) take the     *
// *  str parameter being passed and capitalize the first letter of each word. Words      *
// *  will be separated by only one space.
