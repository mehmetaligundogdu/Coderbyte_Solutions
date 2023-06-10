export const longestWord=(sen) => {
    const arr=sen.replace(/[^a-zA-Z ]/g,"").split(" ")

    arr.sort((a,b) =>{
        return b.length-a.length;
    })


    return arr[0];

}


//LONGEST WORD
/*
1.Using the JavaScript language,have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
2.If there are two or more words that are the same length,return the first word from the string with that length.
3.Ignore punctuation and assume sen will not be empty.
*/

// TR

/*
1.reqex içerisindeki ifade ile, sen içerisindeki, harf dışında olanları "" ile .replace() metodu sayesinde değiştir.Yani sil.Reqex içerisinde ^a-zA-Z  den sonra boşluk bırakılmıştır.Çünkü boşlukları da almak istiyoruz ki oralardan kelimeleri böleceğiz.

2.split(' ') ile sen içerisindeki kelimeleri, boşluklardan ayır ve arr içerisine at.

3.sort() metodu ile, arr içerisindeki kelimeleri uzunluklarına göre sıralarız.Sort() metodu, stringlerde de kullanılabilir.Ancak, stringlerde kullanıldığında, alfabetik sıralama yapar.Biz burda length'e göre sıralama yaptık.

4.return arr[0] ile, en uzun kelimeyi 0.indexe aldığımz için, döndürürüz.
*/
