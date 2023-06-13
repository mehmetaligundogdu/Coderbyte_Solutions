export const firstReverse=(str) => {
    str=str.split("").reverse().join("");

    return str
}


//FIRST REVERSE
/*
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

//TR
/*
Verilen string ifadeyi split("") ile harf harf ayırdık.
reverse() ile ters çevirdik.
join("") ile birleştirdik.
*/