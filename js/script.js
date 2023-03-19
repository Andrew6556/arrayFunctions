"use strict";

function palindrome(word){
    return (word.split('').reverse().join('') == word ? 
            `Слово "${word}" является паллидромом`:
            `Слово "${word}" не является паллидромом`)
}

console.log(palindrome("топот"))