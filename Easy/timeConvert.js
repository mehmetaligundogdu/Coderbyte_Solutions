export const timeConvert = (num) => {
  const hour = Math.floor(num / 60); // Math.floor ile 60'a (1 saat=60dakika) bölümünden kalanı en yakın tamsayıya yuvarladık.
  const minute = num % 60; // 60'a bölümünden kalan
  return `${hour}:${minute}`;
};

// Time Convert
//   Using the JavaScript language, have the function TimeConvert(num) take the num
//   parameter being passed and return the number of hours and minutes the parameter
//   converts to (ie. if num = 63 then the output should be 1:3). Separate the number
//   of hours and minutes with a colon.
