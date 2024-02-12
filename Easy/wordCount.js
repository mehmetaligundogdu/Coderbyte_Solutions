export const wordCount = (str) => {
  let word = str.trim().split(" ");
  return word.length;
};

/**
Have the function wordCount(str) take the str string parameter being passed
 * and return the number of words the string contains (e.g. "Never eat shredded
 * wheat or cake" would return 6). Words will be separated by single spaces.
 */
