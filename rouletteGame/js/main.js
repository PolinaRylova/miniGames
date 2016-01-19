"use strict";

console.log("start loading script");

var img1, img2, img3, runBtn, winnerBlock, rerunBtn;

function docReady() {
	console.log("doc ready");

	img1 = document.getElementById('img1');
	img2 = document.getElementById('img2');
	img3 = document.getElementById('img3');
	runBtn = document.getElementById('runBtn');
	winnerBlock = document.getElementById('winner');
	rerunBtn = document.getElementById('rerunBtn');

	runBtn.addEventListener('click', runBtnClick);
};

function runBtnClick() {
	var arrayNumbers = generateRandomNumbers();
	
	setItemAttributes(arrayNumbers);

	if(isWin(arrayNumbers)){
		showWinMessage();
	}
};

function generateRandomNumbers(){
	return [Math.floor((Math.random() * 5) + 1), Math.floor((Math.random() * 5) + 1), Math.floor((Math.random() * 5) + 1)];
};

function setItemAttributes(arrayX){
    img1.setAttribute('src', 'img/' + arrayX[0] + '.png');
    img2.setAttribute('src', 'img/' + arrayX[1] + '.png');
    img3.setAttribute('src', 'img/' + arrayX[2] + '.png');
};

function isWin(arrayX){
	return arrayX[0] == arrayX[1] && arrayX[1] == arrayX[2];
};

function showWinMessage(){
    winnerBlock.style.display='block';
    runBtn.setAttribute('disabled', 'disabled');
    rerunBtn.style.display='block';
    rerunBtn.addEventListener('click', rerunBtnClick);
};

function rerunBtnClick() {
	rerunBtn.style.display='none';
	winnerBlock.style.display='none';
	runBtn.removeAttribute('disabled', 'disabled');
};

document.addEventListener('DOMContentLoaded', docReady);

console.log("end loading script");

