export const findIntersection=(strArr) => {
    let intersection=[];
    let küme1=strArr[0].replace(/\s/g,"").split(',')
    let küme2=strArr[1].replace(/\s/g,"").split(',')

    küme2.forEach((item) => {
        if(küme1.includes(item)){
            intersection.push(item)
        }
    })
    if(intersection.length===0){
        return false
    }else{
        return intersection.toString()
    }
}


//FIND INTERSECTION

/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
the first element will represent a list of comma-separated numbers sorted in ascending order,
the second element will represent a second list of comma-separated numbers (also sorted).
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.
If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

//TR
/*
1.strArr içindeki dizi 2 elemandan oluşuyor. Bu elemanlar virgülle ayrılmış ve rakamlar arasında boşlklar var. 
2.küme1 ve küme2 değişkenlerindeki boşlukları reqex ile çıkartıp, replace() ile siliyoruz, split() ile virgüllerden ayırıyoruz.
3.küme2 içindeki her bir elemanı küme1 içinde arıyoruz forEach(item). Eğer küme1 içinde varsa intersection dizisine ekliyoruz,yoksa false döndürüyoruz.
*/