webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var carousel = $('.slider-wrap');
	var slideWidth = void 0;

	$(function () {
		slideWidth = $('.slider').width();

		$(window).resize(function () {
			slideWidth = $('.slider').width();
			console.log(slideWidth);
		});

		$('.slider__arrow_prev').click(function () {
			changeSlide(1);
		});

		$('.slider__arrow_next').click(function () {
			changeSlide(-1);
		});
	});

	function changeSlide(index) {
		if (carousel.hasClass('transition')) return;
		carousel.addClass('transition').css('transform', 'translateX(' + index * slideWidth + 'px)');

		setTimeout(function () {

			if (index === 1) {
				$('.slide:first').before($('.slide:last'));
			} else if (index === -1) {
				$('.slide:last').after($('.slide:first'));
			}

			carousel.removeClass('transition');
			carousel.css('transform', 'translateX(0px)');
		}, 800);
		}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL3Rhc2syL3Rhc2syLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY2Fyb3VzZWwgPSAkKCcuc2xpZGVyLXdyYXAnKTtcbmxldCBzbGlkZVdpZHRoO1xuXG4kKGZ1bmN0aW9uKCkge1xuXHRzbGlkZVdpZHRoID0gJCgnLnNsaWRlcicpLndpZHRoKCk7XG5cblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHRzbGlkZVdpZHRoID0gJCgnLnNsaWRlcicpLndpZHRoKCk7XG5cdFx0Y29uc29sZS5sb2coc2xpZGVXaWR0aCk7XG5cdH0pO1xuXG5cdCQoJy5zbGlkZXJfX2Fycm93X3ByZXYnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRjaGFuZ2VTbGlkZSgxKTtcblx0fSk7XG5cblx0JCgnLnNsaWRlcl9fYXJyb3dfbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGNoYW5nZVNsaWRlKC0xKTtcblx0fSk7XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlU2xpZGUoaW5kZXgpIHtcblx0aWYgKGNhcm91c2VsLmhhc0NsYXNzKCd0cmFuc2l0aW9uJykpIHJldHVybjtcblx0Y2Fyb3VzZWwuYWRkQ2xhc3MoJ3RyYW5zaXRpb24nKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAoaW5kZXggKiBzbGlkZVdpZHRoKSArICdweCknKTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKGluZGV4ID09PSAxKSB7XG5cdFx0XHQkKCcuc2xpZGU6Zmlyc3QnKS5iZWZvcmUoJCgnLnNsaWRlOmxhc3QnKSk7XG5cdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdCQoJy5zbGlkZTpsYXN0JykuYWZ0ZXIoJCgnLnNsaWRlOmZpcnN0JykpO1xuXHRcdH1cblxuXHRcdGNhcm91c2VsLnJlbW92ZUNsYXNzKCd0cmFuc2l0aW9uJyk7XG5cdFx0Y2Fyb3VzZWwuY3NzKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGVYKDBweCknKTtcblxuXHR9LCA4MDApO1xuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9wYWdlcy90YXNrMi90YXNrMi5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9