"use strict";

console.log('start loading script');

var btnCheck; 
var result; 
var counter; 
var entNum;

var countTry = 0;
var MAX_COUNT_TRY = 5;
var randomNumber = Math.floor((Math.random() * 100) + 1);
var isGameEnd = false;

function docReady() {
	console.log('document ready');

	btnCheck = document.getElementById('btnCheck');
	result = document.getElementById('result');
	counter = document.getElementById('counter');
	entNum = document.getElementById('entNum');

	btnCheck.addEventListener('click', checkNumber); 
};

function checkNumber() {

	console.log('check button was click');

	var enterNumber = entNum.value;

	if(isGameEnd){
		return;
	};

	if(!IsNumeric(enterNumber) || enterNumber <= 0 || enterNumber > 100) {
		showResultMessage('Неверный ввод. Введите число в диапазоне от 1 до 100');
		return;
	};

	countTry++;

	if(enterNumber == randomNumber) {
		showResultMessage('Вы угадали c ' + countTry + ' попытки!');
		finishGame();
		return;
	};

	enterNumber > randomNumber ? showResultMessage('Загаданное число меньше') : showResultMessage('Загаданное число больше');

	if(isCountTryMax()) {
		showResultMessage('Попытки исчерпаны! Вы проиграли.');
		finishGame();
	} else {
		showCountState();
	};
};

function IsNumeric(num) {
     return (num >=0 || num < 0);
};

function showResultMessage(message){
	result.innerHTML = message;
};

function isCountTryMax() {
	return countTry == MAX_COUNT_TRY;
};

function showCountState() {
	counter.innerHTML = 'Попыток осталось ' + (MAX_COUNT_TRY - countTry) + '!';
};

function finishGame() {
	btnCheck.setAttribute('disabled', 'disabled');
	counter.innerHTML = '';
	isGameEnd = true;
};

document.addEventListener('DOMContentLoaded', docReady);

console.log('end loading script');
