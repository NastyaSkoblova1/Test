webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var carousel = $('.slider-wrap');
	var slideWidth = void 0;

	$(function () {
		slideWidth = $('.slide').width();

		$(window).resize(function () {
			slideWidth = $('.slide').width();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL3Rhc2syL3Rhc2syLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY2Fyb3VzZWwgPSAkKCcuc2xpZGVyLXdyYXAnKTtcbmxldCBzbGlkZVdpZHRoO1xuXG4kKGZ1bmN0aW9uKCkge1xuXHRzbGlkZVdpZHRoID0gJCgnLnNsaWRlJykud2lkdGgoKTtcblxuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdHNsaWRlV2lkdGggPSAkKCcuc2xpZGUnKS53aWR0aCgpO1xuXHRcdGNvbnNvbGUubG9nKHNsaWRlV2lkdGgpO1xuXHR9KTtcblxuXHQkKCcuc2xpZGVyX19hcnJvd19wcmV2JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0Y2hhbmdlU2xpZGUoMSk7XG5cdH0pO1xuXG5cdCQoJy5zbGlkZXJfX2Fycm93X25leHQnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRjaGFuZ2VTbGlkZSgtMSk7XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZVNsaWRlKGluZGV4KSB7XG5cdGlmIChjYXJvdXNlbC5oYXNDbGFzcygndHJhbnNpdGlvbicpKSByZXR1cm47XG5cdGNhcm91c2VsLmFkZENsYXNzKCd0cmFuc2l0aW9uJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKGluZGV4ICogc2xpZGVXaWR0aCkgKyAncHgpJyk7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXHRcdGlmIChpbmRleCA9PT0gMSkge1xuXHRcdFx0JCgnLnNsaWRlOmZpcnN0JykuYmVmb3JlKCQoJy5zbGlkZTpsYXN0JykpO1xuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHQkKCcuc2xpZGU6bGFzdCcpLmFmdGVyKCQoJy5zbGlkZTpmaXJzdCcpKTtcblx0XHR9XG5cblx0XHRjYXJvdXNlbC5yZW1vdmVDbGFzcygndHJhbnNpdGlvbicpO1xuXHRcdGNhcm91c2VsLmNzcygndHJhbnNmb3JtJywndHJhbnNsYXRlWCgwcHgpJyk7XG5cblx0fSwgODAwKTtcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvcGFnZXMvdGFzazIvdGFzazIuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==