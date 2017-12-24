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

				$('.test__input').change(function () {
					$(this).parents('.test__answers').siblings('.test__btn._check').show();

					if ($(this).attr('type') === 'radio') {
						return checkedRadio = $(this).val();
					}

					if ($(this).attr('type') === 'checkbox' && $(this).is(':checked') && checkedCheckbox.indexOf($(this).val()) === -1) {
						checkedCheckbox.push($(this).val());
					}

					if ($(this).attr('type') === 'checkbox' && !$(this).is(":checked")) {
						checkedCheckbox.splice(checkedCheckbox.indexOf($(this).val()), 1);
					}
				});

				$('.test__btn._check').on('click', function () {
					var _this = this;

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

					checkedCheckbox.forEach(function (item, i) {
						var arr1 = checkedCheckbox.sort();

						if (+arr1[i] === +options.rightAnswers[currentQuestion][i]) {
							rightChecked = true;
						} else {
							rightChecked = false;
						}
					});

					if ($(this).parents('.test__item').find('.test__input').attr('type') === 'checkbox') {
						[].concat(_toConsumableArray(options.rightAnswers[currentQuestion])).forEach(function (item) {
							$(_this).parents('.test__item').find('.test__input[value="' + item + '"]').parent().addClass('_correct');
						});

						checkedCheckbox.forEach(function (item) {
							if ([].concat(_toConsumableArray(options.rightAnswers[currentQuestion])).indexOf(+item) === -1) {
								$(_this).parents('.test__item').find('.test__input[value="' + +item + '"]').parent().addClass('_wrong');
							}
						});
					}

					if (rightChecked) {
						rightAnswersAmount++;
					}

					// console.log(rightAnswersAmount);

					$(this).hide();
					$(this).next().show();
				});

				$('.test__btn._next').on('click', function () {
					$(this).parents('.test__item').hide();
					$(this).parents('.test__item').next().show();

					currentQuestion++;
				});

				$('.test__btn-result').on('click', function () {
					$(this).parents('.test__item').hide();
					showResult();
				});

				function showResult() {
					var resultPercent = rightAnswersAmount / $('.test__item').length * 100;

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

	$('.test1').testConfig({ rightAnswers: [2, 7, [10, 11, 12], 15, 20, 22, 28, 30] });
	// $('.test2').testConfig({rightAnswers: [2, 7, 28, [10, 11, 12], 30]});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbigkKXtcclxuXHQkLmZuLnRlc3RDb25maWcgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgIHJpZ2h0QW5zd2VyczogW11cclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHZhciBtYWtlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCByaWdodEFuc3dlcnNBbW91bnQgPSAwO1xyXG5cdFx0XHRsZXQgY3VycmVudFF1ZXN0aW9uID0gMDtcclxuXHRcdFx0bGV0IGNoZWNrZWRSYWRpbztcclxuXHRcdFx0bGV0IGNoZWNrZWRDaGVja2JveCA9IFtdO1xyXG5cdFx0XHRsZXQgcmlnaHRDaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHQkKCcudGVzdF9faW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcudGVzdF9fYW5zd2VycycpLnNpYmxpbmdzKCcudGVzdF9fYnRuLl9jaGVjaycpLnNob3coKTtcclxuXHJcblx0XHRcdFx0aWYgKCQodGhpcykuYXR0cigndHlwZScpID09PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2hlY2tlZFJhZGlvID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94JyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpICYmIGNoZWNrZWRDaGVja2JveC5pbmRleE9mKCQodGhpcykudmFsKCkpID09PSAtMSkge1xyXG5cdFx0XHRcdFx0Y2hlY2tlZENoZWNrYm94LnB1c2goJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcgJiYgISgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpKSB7XHJcblx0XHRcdFx0XHRjaGVja2VkQ2hlY2tib3guc3BsaWNlKGNoZWNrZWRDaGVja2JveC5pbmRleE9mKCQodGhpcykudmFsKCkpLCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnLnRlc3RfX2J0bi5fY2hlY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcudGVzdF9faXRlbScpLmZpbmQoJy50ZXN0X19pbnB1dCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdGlmICgrY2hlY2tlZFJhZGlvID09PSBvcHRpb25zLnJpZ2h0QW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dKSB7XHJcblx0XHRcdFx0XHRyaWdodEFuc3dlcnNBbW91bnQrKztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19pdGVtJykuZmluZCgnLnRlc3RfX2lucHV0JykuYXR0cigndHlwZScpID09PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0XHRpZiAoKyQodGhpcykucGFyZW50cygnLnRlc3RfX2l0ZW0nKS5maW5kKCcudGVzdF9faW5wdXQ6Y2hlY2tlZCcpLnZhbCgpICE9PSArb3B0aW9ucy5yaWdodEFuc3dlcnNbY3VycmVudFF1ZXN0aW9uXSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19pdGVtJykuZmluZCgnLnRlc3RfX2lucHV0OmNoZWNrZWQnKS5wYXJlbnQoKS5hZGRDbGFzcygnX3dyb25nJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3RfX2l0ZW0nKS5maW5kKCcudGVzdF9faW5wdXRbdmFsdWU9XCInICsgb3B0aW9ucy5yaWdodEFuc3dlcnNbY3VycmVudFF1ZXN0aW9uXSArICdcIl0nKS5wYXJlbnQoKS5hZGRDbGFzcygnX2NvcnJlY3QnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNoZWNrZWRDaGVja2JveC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRcdGxldCBhcnIxID0gY2hlY2tlZENoZWNrYm94LnNvcnQoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoK2FycjFbaV0gPT09ICtvcHRpb25zLnJpZ2h0QW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dW2ldKSB7XHJcblx0XHRcdFx0XHRcdHJpZ2h0Q2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyaWdodENoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50cygnLnRlc3RfX2l0ZW0nKS5maW5kKCcudGVzdF9faW5wdXQnKS5hdHRyKCd0eXBlJykgPT09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRcdFsuLi5vcHRpb25zLnJpZ2h0QW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3RfX2l0ZW0nKS5maW5kKCcudGVzdF9faW5wdXRbdmFsdWU9XCInICsgaXRlbSArICdcIl0nKS5wYXJlbnQoKS5hZGRDbGFzcygnX2NvcnJlY3QnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNoZWNrZWRDaGVja2JveC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChbLi4ub3B0aW9ucy5yaWdodEFuc3dlcnNbY3VycmVudFF1ZXN0aW9uXV0uaW5kZXhPZigraXRlbSkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcudGVzdF9faXRlbScpLmZpbmQoJy50ZXN0X19pbnB1dFt2YWx1ZT1cIicgKyAraXRlbSArICdcIl0nKS5wYXJlbnQoKS5hZGRDbGFzcygnX3dyb25nJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChyaWdodENoZWNrZWQpIHtcclxuXHRcdFx0XHRcdHJpZ2h0QW5zd2Vyc0Ftb3VudCsrO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmlnaHRBbnN3ZXJzQW1vdW50KTtcclxuXHJcblx0XHRcdFx0JCh0aGlzKS5oaWRlKCk7XHJcblx0XHRcdFx0JCh0aGlzKS5uZXh0KCkuc2hvdygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQoJy50ZXN0X19idG4uX25leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19pdGVtJykuaGlkZSgpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3RfX2l0ZW0nKS5uZXh0KCkuc2hvdygpO1xyXG5cclxuXHRcdFx0XHRjdXJyZW50UXVlc3Rpb24rKztcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcudGVzdF9fYnRuLXJlc3VsdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3RfX2l0ZW0nKS5oaWRlKCk7XHJcblx0XHRcdFx0c2hvd1Jlc3VsdCgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIHNob3dSZXN1bHQoKSB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdFBlcmNlbnQgPSByaWdodEFuc3dlcnNBbW91bnQgLyAkKCcudGVzdF9faXRlbScpLmxlbmd0aCAqIDEwMDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAocmVzdWx0UGVyY2VudCA8PSAyNSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcudGVzdCcpLmZpbmQoJy50ZXN0X19yZXN1bHQuXzEnKS5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocmVzdWx0UGVyY2VudCA+IDI1ICYmIHJlc3VsdFBlcmNlbnQgPD0gNTApIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3QnKS5maW5kKCcudGVzdF9fcmVzdWx0Ll8yJykuc2hvdygpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHJlc3VsdFBlcmNlbnQgPiA1MCAmJiByZXN1bHRQZXJjZW50IDw9IDc1KSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJy50ZXN0JykuZmluZCgnLnRlc3RfX3Jlc3VsdC5fMycpLnNob3coKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChyZXN1bHRQZXJjZW50ID4gNzUpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50cygnLnRlc3QnKS5maW5kKCcudGVzdF9fcmVzdWx0Ll80Jykuc2hvdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKG1ha2UpO1xyXG5cdFx0XHJcblx0fTtcclxufSkoJCk7XHJcblxyXG4kKCcudGVzdDEnKS50ZXN0Q29uZmlnKHtyaWdodEFuc3dlcnM6IFsyLCA3LCBbMTAsIDExLCAxMl0sIDE1LCAyMCwgMjIsIDI4LCAzMF19KTtcclxuLy8gJCgnLnRlc3QyJykudGVzdENvbmZpZyh7cmlnaHRBbnN3ZXJzOiBbMiwgNywgMjgsIFsxMCwgMTEsIDEyXSwgMzBdfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=