webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	(function ($) {
		$.fn.testConfig = function (options) {
			options = $.extend({
				rightAnswers: []
			}, options);

			var make = function make() {
				var rightAnswersAmount = 0;
				var currentQuestion = 0;
				var checkedRadio = void 0;
				var checkedCheckbox = [];
				var rightChecked = false;

				$('.test__start-btn').on('click', function () {
					$(this).parents('.test__start').hide();
					$(this).parents('.test__start').next().show();
				});

				$('.test__input').change(function () {
					var testItem = $(this).parents('.test__item');
					var currentRightAnswer = options.rightAnswers[currentQuestion];

					if ($(this).attr('type') === 'radio') {
						var _checkedRadio = $(this).val();

						$(this).parents('.test__answers').siblings('.test__btn._next').show();
						$(this).parents('.test__answers').siblings('.test__btn-result').show();
						testItem.find('.test__input').attr('disabled', true);
						// $(this).parents('.test__answer').find('.test__details').show();

						if (+_checkedRadio === currentRightAnswer) {
							rightAnswersAmount++;
						}

						if (+testItem.find('.test__input:checked').val() !== +currentRightAnswer) {
							testItem.find('.test__input:checked').parent().addClass('_wrong');
							testItem.find('.test__input:checked').parent().siblings().show();
						}

						testItem.find('.test__input[value="' + currentRightAnswer + '"]').parent().addClass('_correct');
						testItem.find('.test__input[value="' + currentRightAnswer + '"]').parent().siblings().show();
					}

					if ($(this).attr('type') === 'checkbox') {
						$(this).parents('.test__answers').siblings('.test__btn._check').show();
					}

					if ($(this).attr('type') === 'checkbox' && $(this).is(':checked') && checkedCheckbox.indexOf($(this).val()) === -1) {
						checkedCheckbox.push($(this).val());
					}

					if ($(this).attr('type') === 'checkbox' && !$(this).is(":checked")) {
						checkedCheckbox.splice(checkedCheckbox.indexOf($(this).val()), 1);
					}
				});

				$('.test__btn._check').on('click', function () {
					var testItem = $(this).parents('.test__item');

					testItem.find('.test__input').attr('disabled', true);

					checkedCheckbox.forEach(function (item, i) {
						var arr1 = checkedCheckbox.sort();

						if (+arr1[i] === +options.rightAnswers[currentQuestion][i] && arr1.length === options.rightAnswers[currentQuestion].length) {
							rightChecked = true;
						} else {
							rightChecked = false;
						}
					});

					if (testItem.find('.test__input').attr('type') === 'checkbox') {
						[].concat(_toConsumableArray(options.rightAnswers[currentQuestion])).forEach(function (item) {
							testItem.find('.test__input[value="' + +item + '"]').parent().addClass('_correct');
							testItem.find('.test__input[value="' + +item + '"]').parent().siblings().show();
						});

						checkedCheckbox.forEach(function (item) {
							if ([].concat(_toConsumableArray(options.rightAnswers[currentQuestion])).indexOf(+item) === -1) {
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

				$('.test__btn._next').on('click', function () {
					$(this).parents('.test__item').hide();
					$(this).parents('.test__item').next().show();

					console.log(rightAnswersAmount);

					currentQuestion++;
				});

				$('.test__btn-result').on('click', function () {
					$(this).parents('.test__item').hide();
					showResult();

					console.log(rightAnswersAmount);
				});

				function showResult() {
					var resultPercent = rightAnswersAmount / $('.test__item').length * 100;

					$('.test__result .test__result-count').text(rightAnswersAmount + '/' + options.rightAnswers.length);

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
			};

			return this.each(make);
		};
	})($);

	$('.test1').testConfig({ rightAnswers: [2, 7, [10, 11, 12], 15, 20, 22, 28, 30] });
	$('.test2').testConfig({ rightAnswers: [2, 7, 28, [10, 11, 12], 30] });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCQpe1xuXHQkLmZuLnRlc3RDb25maWcgPSBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgcmlnaHRBbnN3ZXJzOiBbXVxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dmFyIG1ha2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdGxldCByaWdodEFuc3dlcnNBbW91bnQgPSAwO1xuXHRcdFx0bGV0IGN1cnJlbnRRdWVzdGlvbiA9IDA7XG5cdFx0XHRsZXQgY2hlY2tlZFJhZGlvO1xuXHRcdFx0bGV0IGNoZWNrZWRDaGVja2JveCA9IFtdO1xuXHRcdFx0bGV0IHJpZ2h0Q2hlY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHQkKCcudGVzdF9fc3RhcnQtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3RfX3N0YXJ0JykuaGlkZSgpO1xuXHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19zdGFydCcpLm5leHQoKS5zaG93KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JCgnLnRlc3RfX2lucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgdGVzdEl0ZW0gPSAkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19pdGVtJyk7XG5cdFx0XHRcdGxldCBjdXJyZW50UmlnaHRBbnN3ZXIgPSBvcHRpb25zLnJpZ2h0QW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dO1xuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PT0gJ3JhZGlvJykge1xuXHRcdFx0XHRcdGxldCBjaGVja2VkUmFkaW8gPSAkKHRoaXMpLnZhbCgpO1xuXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcudGVzdF9fYW5zd2VycycpLnNpYmxpbmdzKCcudGVzdF9fYnRuLl9uZXh0Jykuc2hvdygpO1xuXHRcdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3RfX2Fuc3dlcnMnKS5zaWJsaW5ncygnLnRlc3RfX2J0bi1yZXN1bHQnKS5zaG93KCk7XG5cdFx0XHRcdFx0dGVzdEl0ZW0uZmluZCgnLnRlc3RfX2lucHV0JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdFx0XHQvLyAkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19hbnN3ZXInKS5maW5kKCcudGVzdF9fZGV0YWlscycpLnNob3coKTtcblxuXHRcdFx0XHRcdGlmICgrY2hlY2tlZFJhZGlvID09PSBjdXJyZW50UmlnaHRBbnN3ZXIpIHtcblx0XHRcdFx0XHRcdHJpZ2h0QW5zd2Vyc0Ftb3VudCsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgrdGVzdEl0ZW0uZmluZCgnLnRlc3RfX2lucHV0OmNoZWNrZWQnKS52YWwoKSAhPT0gK2N1cnJlbnRSaWdodEFuc3dlcikge1xuXHRcdFx0XHRcdFx0dGVzdEl0ZW0uZmluZCgnLnRlc3RfX2lucHV0OmNoZWNrZWQnKS5wYXJlbnQoKS5hZGRDbGFzcygnX3dyb25nJyk7XG5cdFx0XHRcdFx0XHR0ZXN0SXRlbS5maW5kKCcudGVzdF9faW5wdXQ6Y2hlY2tlZCcpLnBhcmVudCgpLnNpYmxpbmdzKCkuc2hvdygpO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFxuXHRcdFx0XHRcdHRlc3RJdGVtLmZpbmQoJy50ZXN0X19pbnB1dFt2YWx1ZT1cIicgKyBjdXJyZW50UmlnaHRBbnN3ZXIgKyAnXCJdJykucGFyZW50KCkuYWRkQ2xhc3MoJ19jb3JyZWN0Jyk7XG5cdFx0XHRcdFx0dGVzdEl0ZW0uZmluZCgnLnRlc3RfX2lucHV0W3ZhbHVlPVwiJyArIGN1cnJlbnRSaWdodEFuc3dlciArICdcIl0nKS5wYXJlbnQoKS5zaWJsaW5ncygpLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3RfX2Fuc3dlcnMnKS5zaWJsaW5ncygnLnRlc3RfX2J0bi5fY2hlY2snKS5zaG93KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcgJiYgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSAmJiBcblx0XHRcdFx0XHRjaGVja2VkQ2hlY2tib3guaW5kZXhPZigkKHRoaXMpLnZhbCgpKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRjaGVja2VkQ2hlY2tib3gucHVzaCgkKHRoaXMpLnZhbCgpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94JyAmJiAhKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkpIHtcblx0XHRcdFx0XHRjaGVja2VkQ2hlY2tib3guc3BsaWNlKGNoZWNrZWRDaGVja2JveC5pbmRleE9mKCQodGhpcykudmFsKCkpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdCQoJy50ZXN0X19idG4uX2NoZWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCB0ZXN0SXRlbSA9ICQodGhpcykucGFyZW50cygnLnRlc3RfX2l0ZW0nKTtcblxuXHRcdFx0XHR0ZXN0SXRlbS5maW5kKCcudGVzdF9faW5wdXQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG5cdFx0XHRcdGNoZWNrZWRDaGVja2JveC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcblx0XHRcdFx0XHRsZXQgYXJyMSA9IGNoZWNrZWRDaGVja2JveC5zb3J0KCk7XG5cblx0XHRcdFx0XHRpZiAoK2FycjFbaV0gPT09ICtvcHRpb25zLnJpZ2h0QW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dW2ldICYmIFxuXHRcdFx0XHRcdFx0YXJyMS5sZW5ndGggPT09IG9wdGlvbnMucmlnaHRBbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbl0ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRyaWdodENoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyaWdodENoZWNrZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHRlc3RJdGVtLmZpbmQoJy50ZXN0X19pbnB1dCcpLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdFsuLi5vcHRpb25zLnJpZ2h0QW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dXS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHR0ZXN0SXRlbS5maW5kKCcudGVzdF9faW5wdXRbdmFsdWU9XCInICsgK2l0ZW0gKyAnXCJdJykucGFyZW50KCkuYWRkQ2xhc3MoJ19jb3JyZWN0Jyk7XG5cdFx0XHRcdFx0XHR0ZXN0SXRlbS5maW5kKCcudGVzdF9faW5wdXRbdmFsdWU9XCInICsgK2l0ZW0gKyAnXCJdJykucGFyZW50KCkuc2libGluZ3MoKS5zaG93KCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRjaGVja2VkQ2hlY2tib3guZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKFsuLi5vcHRpb25zLnJpZ2h0QW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dXS5pbmRleE9mKCtpdGVtKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0dGVzdEl0ZW0uZmluZCgnLnRlc3RfX2lucHV0W3ZhbHVlPVwiJyArICtpdGVtICsgJ1wiXScpLnBhcmVudCgpLmFkZENsYXNzKCdfd3JvbmcnKTtcblx0XHRcdFx0XHRcdFx0dGVzdEl0ZW0uZmluZCgnLnRlc3RfX2lucHV0W3ZhbHVlPVwiJyArICtpdGVtICsgJ1wiXScpLnBhcmVudCgpLnNpYmxpbmdzKCkuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmlnaHRDaGVja2VkKSB7XG5cdFx0XHRcdFx0cmlnaHRBbnN3ZXJzQW1vdW50Kys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkKHRoaXMpLmhpZGUoKTtcblx0XHRcdFx0JCh0aGlzKS5uZXh0KCkuc2hvdygpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQoJy50ZXN0X19idG4uX25leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcudGVzdF9faXRlbScpLmhpZGUoKTtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcudGVzdF9faXRlbScpLm5leHQoKS5zaG93KCk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2cocmlnaHRBbnN3ZXJzQW1vdW50KTtcblxuXHRcdFx0XHRjdXJyZW50UXVlc3Rpb24rKztcblx0XHRcdH0pO1xuXG5cdFx0XHQkKCcudGVzdF9fYnRuLXJlc3VsdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19pdGVtJykuaGlkZSgpO1xuXHRcdFx0XHRzaG93UmVzdWx0KCk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2cocmlnaHRBbnN3ZXJzQW1vdW50KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRmdW5jdGlvbiBzaG93UmVzdWx0KCkge1xuXHRcdFx0XHRsZXQgcmVzdWx0UGVyY2VudCA9IHJpZ2h0QW5zd2Vyc0Ftb3VudCAvICQoJy50ZXN0X19pdGVtJykubGVuZ3RoICogMTAwO1xuXG5cdFx0XHRcdCQoJy50ZXN0X19yZXN1bHQgLnRlc3RfX3Jlc3VsdC1jb3VudCcpLnRleHQoYCR7cmlnaHRBbnN3ZXJzQW1vdW50fS8ke29wdGlvbnMucmlnaHRBbnN3ZXJzLmxlbmd0aH1gKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChyZXN1bHRQZXJjZW50IDw9IDI1KSB7XG5cdFx0XHRcdFx0JCgnLnRlc3RfX3Jlc3VsdC5fMScpLnNob3coKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXN1bHRQZXJjZW50ID4gMjUgJiYgcmVzdWx0UGVyY2VudCA8PSA1MCkge1xuXHRcdFx0XHRcdCQoJy50ZXN0X19yZXN1bHQuXzInKS5zaG93KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzdWx0UGVyY2VudCA+IDUwICYmIHJlc3VsdFBlcmNlbnQgPD0gNzUpIHtcblx0XHRcdFx0XHQkKCcudGVzdF9fcmVzdWx0Ll8zJykuc2hvdygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3VsdFBlcmNlbnQgPiA3NSkge1xuXHRcdFx0XHRcdCQoJy50ZXN0X19yZXN1bHQuXzQnKS5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChtYWtlKTtcblx0XHRcblx0fTtcbn0pKCQpO1xuXG4kKCcudGVzdDEnKS50ZXN0Q29uZmlnKHtyaWdodEFuc3dlcnM6IFsyLCA3LCBbMTAsIDExLCAxMl0sIDE1LCAyMCwgMjIsIDI4LCAzMF19KTtcbiQoJy50ZXN0MicpLnRlc3RDb25maWcoe3JpZ2h0QW5zd2VyczogWzIsIDcsIDI4LCBbMTAsIDExLCAxMl0sIDMwXX0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==