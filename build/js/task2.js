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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL3Rhc2syL3Rhc2syLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGNhcm91c2VsID0gJCgnLnNsaWRlci13cmFwJyk7XHJcbmxldCBzbGlkZVdpZHRoO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHRzbGlkZVdpZHRoID0gJCgnLnNsaWRlJykud2lkdGgoKTtcclxuXHJcblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHNsaWRlV2lkdGggPSAkKCcuc2xpZGUnKS53aWR0aCgpO1xyXG5cdFx0Y29uc29sZS5sb2coc2xpZGVXaWR0aCk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5zbGlkZXJfX2Fycm93X3ByZXYnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGNoYW5nZVNsaWRlKDEpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuc2xpZGVyX19hcnJvd19uZXh0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRjaGFuZ2VTbGlkZSgtMSk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlU2xpZGUoaW5kZXgpIHtcclxuXHRpZiAoY2Fyb3VzZWwuaGFzQ2xhc3MoJ3RyYW5zaXRpb24nKSkgcmV0dXJuO1xyXG5cdGNhcm91c2VsLmFkZENsYXNzKCd0cmFuc2l0aW9uJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKGluZGV4ICogc2xpZGVXaWR0aCkgKyAncHgpJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0aWYgKGluZGV4ID09PSAxKSB7XHJcblx0XHRcdCQoJy5zbGlkZTpmaXJzdCcpLmJlZm9yZSgkKCcuc2xpZGU6bGFzdCcpKTtcclxuXHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdCQoJy5zbGlkZTpsYXN0JykuYWZ0ZXIoJCgnLnNsaWRlOmZpcnN0JykpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhcm91c2VsLnJlbW92ZUNsYXNzKCd0cmFuc2l0aW9uJyk7XHJcblx0XHRjYXJvdXNlbC5jc3MoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZVgoMHB4KScpO1xyXG5cclxuXHR9LCA4MDApO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvcGFnZXMvdGFzazIvdGFzazIuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==