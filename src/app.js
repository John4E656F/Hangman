/*Hangman Vanilla Javascript
* @see https://github.com/John4E656F/Hangman
* @author John4E656F
*/


// Global variables
const container = document.getElementById('alphabetBtn');
let answerDis = document.getElementById('answer');
let answer = "";
let hint = "";
let hp = 10;
let wordDis ="";
let winningCheck ="";
const clue = document.getElementById('clue');
const btnHint = document.getElementById('hint');
const btnReset = document.getElementById('reset');
const hpDis = document.getElementById('hp');
let stickman = document.getElementById('stickman');
let context = stickman.getContext('2d');

//generate alphabet btn
function generateBtn() {
    let btnHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
        (letter) => '<button class="alphabetBtnJS" id="${letter}">${letter}</button>'
        )
    .join("");

return btnHTML;
}