export const simpleSymbol = (str) => {
  let arr = str.toLowerCase().split("");
  let controllArr = [];
  arr.forEach((e) => {
    if (/[a-zA-Z]/.test(e)) {
      if (arr[arr.indexOf(e) - 1] === "+" && arr[arr.indexOf(e) + 1] === "+") {
        controllArr.push(1);
      } else {
        controllArr.push(0);
      }
    }
  });
  return controllArr.includes(0) ? false : true;
};

// Using the JavaScript language, have the function SimpleSymbols(str) take the str  parameter being passed and determine if it is an acceptable sequence by either  returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string   to be true each letter must be surrounded by a + symbol. So the string to the left  would be false. The string will not be empty and will have at least one letter.
