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

// ____________________item_4____________________________
// for (let i of [3,4,-5,2,1,-5,6,465,4545,32, -2].filter(item => item > 0)){
//     console.log(i)
// } 

// ____________________item_5____________________________

// console.log([5, 6, 7, 8, 9].map(item=>item**2))

// ____________________item_6____________________________
// let letter = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// console.log(letter.filter(item => item.length > 5))

// ____________________item_7____________________________
// let list_numbers = [1, 2, 3, 0, 4, 5, 6];
// let result = list_numbers.filter(num => num >= 4).reduce((sum,num)=> sum + num,0)
// console.log(result)

// ____________________item_8____________________________
// let numbers = [1, -2, 3, 0, 4, -5, 6, -11];
// let result = numbers.filter(num => num > 0 ).map(item => Math.sqrt(item))
// console.log(result)
//Здесь я походу немного перестарался :)

// ____________________item_9___________________________

// let users = [ {name: 'John', id: 123, marks : 98 },
//                 {name: 'Baba', id: 101, marks : 23 },
//                 {name: 'John', id: 200, marks : 45 },
//                 {name: 'Wick', id: 115, marks : 75 },]

// let best_users = users.filter(user => user.marks > 50).map(user => user.marks +=15)
// console.log(`Кол-во лучших студентов ${best_users.length}`)
// ____________________item_10___________________________

// let list_numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
////Громоздкий вариант
//// let upgrade_list = [].concat(list_numbers[0],list_numbers[1],list_numbers[2]);

// простой вариант
// console.log(list_numbers.flat())