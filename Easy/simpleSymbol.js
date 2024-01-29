export const simpleSymbol = (str) => {
  let newStr = str.toLowerCase().split("");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] >= "a" && newStr[i] <= "z") {
      if (i === 0 || i === newStr.length) {
        return false;
      }
    }
    {
      if (newStr[i - 1] !== "+" || newStr[i + 1] !== "+") {
        return false;
      }
    }
  }
  return true;
};
// function simpleSymbol(str) {
//   let newStr = str.toLowerCase().split("");
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] >= "a" && newStr[i] <= "z") {
//       if (i === 0 || i === newStr.length) {
//         return false;
//       }

//       if (newStr[i - 1] !== "+" || newStr[i + 1] !== "+") {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// Using the JavaScript language, have the function SimpleSymbols(str) take the str    *
// *  parameter being passed and determine if it is an acceptable sequence by either      *
// *  returning the string true or false. The str parameter will be composed of + and =   *
// *  symbols with several letters between them (ie. ++d+===+c++==a) and for the string   *
// *  to be true each letter must be surrounded by a + symbol. So the string to the left  *
// *  would be false. The string will not be empty and will have at least one letter.
