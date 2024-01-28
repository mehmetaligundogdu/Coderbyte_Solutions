export const questionsMarks = (str) => {
  let sumArr = []; //Toplamları attığımız array.
  let sum = 0; //Toplamı tutan öncü değişken.
  let index = 0; //Array içindeki elemanların indexlerini gezmek için.

  if (str.length < 5) {
    //*???* en az 5 karakter olmalı.
    return false;
  }
  const arr = str.replace(/[^0-9?]/g, "").split(""); //Rakam ve soru işaretleri dışındakileri silip, split() ile ayırıyoruz.

  arr.forEach((item) => {
    //Her bir elemanı geziyoruz.
    if (item != "?") {
      //Eğer eleman soru işareti değilse ==>
      sum = parseInt(item) + parseInt(arr[index + 4]); //Elemanı ve 4 sonraki elemanı topluyoruz. (*???*)
      sumArr.push(sum); //Toplamı sumArr array'ine atıyoruz.
    }
    index++; //index'ı arttırıyoruz.
  });
  return sumArr.includes(10) ? true : false;
};

// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
