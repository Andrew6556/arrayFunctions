"use strict";

// ____________________item_1____________________________
// function palindrome(word){
//     return (word.split('').reverse().join('') == word ? 
//             `Слово "${word}" является паллидромом`:
//             `Слово "${word}" не является паллидромом`)
// }
// console.log(palindrome("топот"))

// ____________________item_2____________________________
// function tyry_pyry(){
//     let numbers = [];
//     for (let i = 1; i <=100; i++){
//         if (i % 3 == 0 && i % 5 == 0){
//             numbers.push("тыры-пыры")
//         }else if (i % 3 == 0){
//             numbers.push("тыры")
//         }else if(i % 5 == 0){
//             numbers.push("пыры")
//         }else{
//             numbers.push(i)
//         }
//     }
//     return numbers
// }
// for (let i of tyry_pyry())console.log(i);


// ____________________item_3____________________________
// function fibonaccis(num) {
//     let one_num = 1;
//     let second_num = 1;
//     for (let i = 3; i <= num; i++) {
//         let result = one_num + second_num;
//         one_num = second_num;
//         second_num = result;
//     }
//     return second_num;
// }
// console.log(fibonaccis(7))