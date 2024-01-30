export const abCheck = (str) => {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a" && arr[i + 4] === "b") {
      return true;
    }
  }
  return false;
};

// Have the function ABCheck(str) take the str parameter being passed and return
//  the string true if the characters a and b are separated by exactly 3 places
//  anywhere in the string at least once (ie. "lane borrowed" would result in
//  true because there is exactly three characters between a and b). Otherwise
//  return the string false.
