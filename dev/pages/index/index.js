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
			let checkedCheckbox = [];
			let rightChecked = false;

			$('.test__input').change(function() {
				$(this).parents('.test__answers').siblings('.test__btn._check').show();

				if ($(this).attr('type') === 'radio') {
					return checkedRadio = $(this).val();
				}

				if ($(this).attr('type') === 'checkbox' && $(this).is(':checked') && checkedCheckbox.indexOf($(this).val()) === -1) {
					checkedCheckbox.push($(this).val());
				}

				if ($(this).attr('type') === 'checkbox' && !($(this).is(":checked"))) {
					checkedCheckbox.splice(checkedCheckbox.indexOf($(this).val()), 1);
				}
			});
			
			$('.test__btn._check').on('click', function() {

				$(this).parents('.test__item').find('.test__input').attr('disabled', true);

				if (+checkedRadio === options.rightAnswers[currentQuestion]) {
					rightAnswersAmount++;
				}

				if ($(this).parents('.test__item').find('.test__input').attr('type') === 'radio') {
					if (+$(this).parents('.test__item').find('.test__input:checked').val() !== +options.rightAnswers[currentQuestion]) {
						$(this).parents('.test__item').find('.test__input:checked').parent().addClass('_wrong');
					}
		
					$(this).parents('.test__item').find('.test__input[value="' + options.rightAnswers[currentQuestion] + '"]').parent().addClass('_correct');
				}

				checkedCheckbox.forEach(function(item, i) {
					let arr1 = checkedCheckbox.sort();

					if (+arr1[i] === +options.rightAnswers[currentQuestion][i]) {
						rightChecked = true;
					} else {
						rightChecked = false;
					}
				});

				if ($(this).parents('.test__item').find('.test__input').attr('type') === 'checkbox') {
					[...options.rightAnswers[currentQuestion]].forEach((item) => {
						$(this).parents('.test__item').find('.test__input[value="' + item + '"]').parent().addClass('_correct');
					});

					checkedCheckbox.forEach((item) => {
						if ([...options.rightAnswers[currentQuestion]].indexOf(+item) === -1) {
							$(this).parents('.test__item').find('.test__input[value="' + +item + '"]').parent().addClass('_wrong');
						}
					});

				}

				if (rightChecked) {
					rightAnswersAmount++;
				}

				console.log(rightAnswersAmount);

				$(this).hide();
				$(this).next().show();
			});

			$('.test__btn._next').on('click', function() {
				$(this).parents('.test__item').hide();
				$(this).parents('.test__item').next().show();

				currentQuestion++;
			});

			$('.test__btn-result').on('click', function() {
				$(this).parents('.test__item').hide();
				showResult();
			});

			function showResult() {
				let resultPercent = rightAnswersAmount / $('.test__item').length * 100;
				
				if (resultPercent <= 25) {
					$(this).parents('.test').find('.test__result._1').show();
				}

				if (resultPercent > 25 && resultPercent <= 50) {
					$(this).parents('.test').find('.test__result._2').show();
				}

				if (resultPercent > 50 && resultPercent <= 75) {
					$(this).parents('.test').find('.test__result._3').show();
				}

				if (resultPercent > 75) {
					$(this).parents('.test').find('.test__result._4').show();
				}
			}
		};

		return this.each(make);
		
	};
})($);

$('.test1').testConfig({rightAnswers: [2, 7, [10, 11, 12], 15, 20, 22, 28, 30]});
// $('.test2').testConfig({rightAnswers: [2, 7, 28, [10, 11, 12], 30]});
