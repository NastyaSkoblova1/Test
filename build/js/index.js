webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	(function ($) {
		$.fn.testConfig = function (options) {
			options = $.extend({
				rightAnswers: [2, 7, 9, 15, 20, 22, 28, 30]
			}, options);
			var rightAnswersAmount = 0;
			var currentQuestion = 0;
			var checkedInput = void 0;

			$('.test__input').change(function () {
				$(this).parents('.test__answers').siblings('.test__btn._check').show();
				return checkedInput = $(this).val();
			});

			$('.test__btn._check').click(function () {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbigkKXtcclxuXHQkLmZuLnRlc3RDb25maWcgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcbiAgICAgIHJpZ2h0QW5zd2VyczogWzIsIDcsIDksIDE1LCAyMCwgMjIsIDI4LCAzMF1cclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cdFx0bGV0IHJpZ2h0QW5zd2Vyc0Ftb3VudCA9IDA7XHJcblx0XHRsZXQgY3VycmVudFF1ZXN0aW9uID0gMDtcclxuXHRcdGxldCBjaGVja2VkSW5wdXQ7XHJcblxyXG5cdFx0JCgnLnRlc3RfX2lucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLnBhcmVudHMoJy50ZXN0X19hbnN3ZXJzJykuc2libGluZ3MoJy50ZXN0X19idG4uX2NoZWNrJykuc2hvdygpO1xyXG5cdFx0XHRyZXR1cm4gY2hlY2tlZElucHV0ID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKCcudGVzdF9fYnRuLl9jaGVjaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoK2NoZWNrZWRJbnB1dCA9PT0gb3B0aW9ucy5yaWdodEFuc3dlcnNbY3VycmVudFF1ZXN0aW9uXSkge1xyXG5cdFx0XHRcdHJpZ2h0QW5zd2Vyc0Ftb3VudCsrO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJpZ2h0QW5zd2Vyc0Ftb3VudCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGJ1dHRvbm5leC5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdC8vIFx0Y3VycmVudFF1ZXN0aW9uKys7XHJcblx0XHQvLyB9KTtcclxuXHRcdFxyXG5cdH07XHJcbn0pKCQpO1xyXG5cclxuJCgnLnRlc3QxJykudGVzdENvbmZpZygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9