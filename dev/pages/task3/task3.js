'use strict';

let nextBlock;
let rightAnswer = 0;
const correct = [2, 7, 9, 15, 20, 22, 28, 30];
const resultVariant = $('.test__result .test__result-variant');
const resultImg = $('.test__result-wrap img');
const resultText = $('.test__result-text');

$(function() {

	$('.test__radio').change(function() {
		$('.test__btn').show();
		$('.test__btn-result').show();
	});

	$('.test__btn').click(function() {
		let answerId = $(this).siblings('.test__answers').find('.test__radio:checked').attr('id');
		nextBlock = $(this).parent('.test__item').next().addClass('show');
		$(this).parent('.test__item').removeClass('show');
		$('.test__btn').hide();
		$('.test__btn-result').hide();

		setRightAnswer(answerId);

		return false;
	});

	$('.test__btn-result').click(function() {
		let answerId = $(this).siblings('.test__answers').find('.test__radio:checked').attr('id');
		let rightAnswerPercent = rightAnswer / correct.length * 100;
		nextBlock = $(this).parent('.test__item').next().addClass('show');
		$(this).parent('.test__item').removeClass('show');

		setRightAnswer(answerId);

		setResult(rightAnswerPercent);

		return false;
	});

	$('.test__restart').click(function() {
		$('form').reset();

		return false;
	});
});

function setRightAnswer(text) {
	for (var i = 0; i < correct.length; i++) {
		if (text == correct[i]) {
			rightAnswer++;
			console.log(rightAnswer);
		}
	}
}

function setResult(percent) {
	$('.test__result .test__result-count').text(`${rightAnswer}/${correct.length}`);

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
