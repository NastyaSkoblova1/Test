'use strict';

(function($){
	$.fn.testConfig = function(options){
		options = $.extend({
      rightAnswers: [2, 7, 9, 15, 20, 22, 28, 30]
		}, options);
		let rightAnswersAmount = 0;
		let currentQuestion = 0;
		let checkedInput;

		$('.test__input').change(function() {
			$(this).parents('.test__answers').siblings('.test__btn._check').show();
			return checkedInput = $(this).val();
		});
		
		$('.test__btn._check').click(function() {
			if (+checkedInput === options.rightAnswers[currentQuestion]) {
				rightAnswersAmount++;
				console.log(rightAnswersAmount);
			}
		});

		// buttonnex.click(function() {
		// 	currentQuestion++;
		// });
		
	};
})($);

$('.test1').testConfig();
