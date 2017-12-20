'use strict';

let rightAnswer = 0;
const correct = ['The Greenhornes', 'ZZ Top', 'The Killers', 'Queens of the Stone Age',
				'The Last Shadow Puppets', 'Джимми Пэйдж', 'Blur', 'The Beatles'];
let answer = [];

const resultVariant = $('.test__result .test__result-variant');
const resultImg = $('.test__result-wrap img');
const resultText = $('.test__result-text');
let nextBlock;

$(function() {

	$('.test__radio').each(function() {
		answer.push($(this));
	});

	$('.test__radio').change(function() {
		let answers = $(this).parent('.test__answer').siblings().find('.test__radio');
		let answerText = $(this).next().text();
		answers.prop('disabled', true);
		$(this).prop('disabled', false);
		setRightAnswer(answerText);
		$('.test__btn').show();
		$('.test__btn-result').show();
	});

	$('.test__btn').click(function() {
		nextBlock = $(this).parent('.test__item').next().addClass('show');
		$(this).parent('.test__item').removeClass('show');
		$('.test__btn').hide();
		$('.test__btn-result').hide();

		return false;
	});

	$('.test__btn-result').click(function() {
		let rightAnswerPercent = rightAnswer / correct.length * 100;
		nextBlock = $(this).parent('.test__item').next().addClass('show');
		$(this).parent('.test__item').removeClass('show');
		$('.test__result .test__result-count').text(`${rightAnswer}/${correct.length}`);
		setResult(rightAnswerPercent);

		return false;
	});

	$('.test__restart').click(function() {
		$('form').reset();

		return false;
	});
});

function setRightAnswer(text) {
	for (var i = 0; i < answer.length; i++) {
		if (text == correct[i]) {
			rightAnswer++;
			console.log(rightAnswer);
		}
	}
}

function setResult(percent) {
	if (percent <= 25) {
		resultVariant.text(`Вы не знаток рок-музыки`);
		resultImg.attr('src', 'img/task3/res1.jpg');
		resultText.text(`Вероятно, вы не любитель рок-музыки. Или просто не особо
		 интересуетесь происходящим в данной сфере. Lorem ipsum dolor sit amet,
		  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		   et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
		    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
		     dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
		      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		       culpa qui officia deserunt mollit anim id est laborum.`);
	}

	if (percent > 25 && percent <= 50) {
		resultVariant.text(`Вы - начинающий рокер`);
		resultImg.attr('src', 'img/task3/res2.jpg');
		resultText.text(`Скорее всего, вы только знакомитесь с рок-музыкой и знаете 
			какие-то широкоизвестные факты. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
			 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
			  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
	}

	if (percent > 50 && percent <= 75) {
		resultVariant.text(`Вы - ценитель рок-музыки`);
		resultImg.attr('src', 'img/task3/res3.jpg');
		resultText.text(`Вы любите рок-музыку и следите за происходящим в ней. Lorem
		 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
		  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
		   ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
		    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
		      deserunt mollit anim id est laborum.`);
	}

	if (percent > 75) {
		resultVariant.text(`Вы - прожжённый рокер`);
		resultImg.attr('src', 'img/task3/res4.jpg');
		resultText.text(`Вы великолепны. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
		  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		   commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
		    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
	}
}
