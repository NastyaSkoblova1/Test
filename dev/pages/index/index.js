'use strict';

(function($){
	$.fn.testConfig = function(options){
		options = $.extend({
      rightAnswers: []
		}, options);

		var make = function() {
			let rightAnswersAmount = 0;
			let currentQuestion = 0;
			let checkedRadio;
			let questionCount = 0;
			let checkedCheckbox = [];
			let rightChecked = false;

			$('.test__start-btn').on('click', function() {
				$(this).parents('.test__start').hide();
				$(this).parents('.test__start').next().show();
				showNumber();
			});

			$('.test__input').change(function() {
				let testItem = $(this).parents('.test__item');
				let currentRightAnswer = options.rightAnswers[currentQuestion];

				if ($(this).attr('type') === 'radio') {
					let checkedRadio = $(this).val();

					$(this).parents('.test__answers').siblings('.test__btn._next').show();
					$(this).parents('.test__answers').siblings('.test__btn-result').show();
					testItem.find('.test__input').attr('disabled', true);
					// $(this).parents('.test__answer').find('.test__details').show();

					if (+checkedRadio === currentRightAnswer) {
						rightAnswersAmount++;
					}

					if (+testItem.find('.test__input:checked').val() !== +currentRightAnswer) {
						testItem.find('.test__input:checked').parent().addClass('_wrong');
						testItem.find('.test__input:checked').parent().siblings().show();

					}
		
					testItem.find('.test__input[value="' + currentRightAnswer + '"]').parent().addClass('_correct');
					// testItem.find('.test__input[value="' + currentRightAnswer + '"]').parent().siblings().show();
				}

				if ($(this).attr('type') === 'checkbox') {
					$(this).parents('.test__answers').siblings('.test__btn._check').show();
				}

				if ($(this).attr('type') === 'checkbox' && $(this).is(':checked') && 
					checkedCheckbox.indexOf($(this).val()) === -1) {
					checkedCheckbox.push($(this).val());
				}

				if ($(this).attr('type') === 'checkbox' && !($(this).is(":checked"))) {
					checkedCheckbox.splice(checkedCheckbox.indexOf($(this).val()), 1);
				}
			});
			
			$('.test__btn._check').on('click', function() {
				let testItem = $(this).parents('.test__item');

				testItem.find('.test__input').attr('disabled', true);

				checkedCheckbox.forEach(function(item, i) {
					let arr1 = checkedCheckbox.sort();

					if (+arr1[i] === +options.rightAnswers[currentQuestion][i] && 
						arr1.length === options.rightAnswers[currentQuestion].length) {
						rightChecked = true;
					} else {
						rightChecked = false;
					}

				});

				if (testItem.find('.test__input').attr('type') === 'checkbox') {
					[...options.rightAnswers[currentQuestion]].forEach((item) => {
						testItem.find('.test__input[value="' + +item + '"]').parent().addClass('_correct');
						// testItem.find('.test__input[value="' + +item + '"]').parent().siblings().show();
					});

					checkedCheckbox.forEach((item) => {
						if ([...options.rightAnswers[currentQuestion]].indexOf(+item) === -1) {
							testItem.find('.test__input[value="' + +item + '"]').parent().addClass('_wrong');
							testItem.find('.test__input[value="' + +item + '"]').parent().siblings().show();
						}
					});

				}

				if (rightChecked) {
					rightAnswersAmount++;
				}

				$(this).hide();
				$(this).next().show();
			});

			$('.test__btn._next').on('click', function() {
				$(this).parents('.test__item').hide();
				$(this).parents('.test__item').next().show();
				showNumber();

				$('body,html').animate({
					scrollTop: 0
				}, 0);

				console.log(rightAnswersAmount);

				currentQuestion++;
			});

			$('.test__btn-result').on('click', function() {
				$(this).parents('.test__item').hide();
				showResult();

				$('body,html').animate({
					scrollTop: 0
				}, 0);

				console.log(rightAnswersAmount);
			});

			function showResult() {
				let resultPercent = rightAnswersAmount / $('.test__item').length * 100;

				$('.test__result .test__result-count').text(`${rightAnswersAmount}/${options.rightAnswers.length}`);
				
				if (resultPercent <= 25) {
					$('.test__result._1').show();
				}

				if (resultPercent > 25 && resultPercent <= 50) {
					$('.test__result._2').show();
				}

				if (resultPercent > 50 && resultPercent <= 75) {
					$('.test__result._3').show();
				}

				if (resultPercent > 75) {
					$('.test__result._4').show();
				}
			}

			function showNumber() {
				questionCount++;
				$('.test__number').text(`${questionCount}/${options.rightAnswers.length}`);
			}
		};

		return this.each(make);
		
	};
})($);

$('.test1').testConfig({rightAnswers: [2, 7, [10, 11, 12], 15, 20, 22, 28, 30]});
$('.test2').testConfig({rightAnswers: [2, 7, 28, [10, 11, 12], 30]});
