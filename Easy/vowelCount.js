export const vowelCount = (str) => {
  let vowels = "aeiouAEIOU";
  let counter = 0;
  let vowelCount = str.split("").map((i) => {
    if (vowels.includes(i)) {
      counter++;
    }
  });
  return counter;
};

/*
Have the function vowelCount(str) take the str string parameter being passed
 * and return the number of vowels the string contains (ie. "All cows eat grass
 * and moo" would return 8). Do not count y as a vowel for this challenge.
*/
