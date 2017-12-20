webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var slideWidth;
	var slider = $('.slider');
	var slideWrapper = $('.slider-wrap');

	$(function () {
		slideWidth = $('.slide').width();
		slider.width(slideWidth);
		// slideWrapper.width(slideWrapper.children().length * slideWidth);

		$(window).resize(function () {
			slideWidth = $('.slide').width();
			slider.width(slideWidth);
		});

		$('.slider__arrow_next').click(function () {
			setTimeout(nextSlide, 500);
			return false;
		});

		$('.slider__arrow_prev').click(function () {
			setTimeout(prevSlide, 500);
			return false;
		});
	});

	function nextSlide() {
		var currentSlide = slideWrapper.data('current');
		currentSlide++;
		if (currentSlide >= slideWrapper.children().length) {
			slideWrapper.css('left', -(currentSlide - 2) * slideWidth);
			slideWrapper.append(slideWrapper.children().first().clone());
			slideWrapper.children().first().remove();
			currentSlide--;
		}
		slideWrapper.animate({ left: -currentSlide * slideWidth }, 500).data('current', currentSlide);
	}

	function prevSlide() {
		var currentSlide = parseInt(slideWrapper.data('current'));
		currentSlide--;
		if (currentSlide < 0) {
			slideWrapper.css('left', -(currentSlide + 2) * slideWidth);
			slideWrapper.prepend(slideWrapper.children().last().clone());
			slideWrapper.children().last().remove();
			currentSlide++;
		}
		slideWrapper.animate({ left: -currentSlide * slideWidth }, 500).data('current', currentSlide);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzbGlkZVdpZHRoO1xudmFyIHNsaWRlciA9ICQoJy5zbGlkZXInKTtcbnZhciBzbGlkZVdyYXBwZXIgPSAkKCcuc2xpZGVyLXdyYXAnKTtcblxuJChmdW5jdGlvbigpIHtcblx0c2xpZGVXaWR0aCA9ICQoJy5zbGlkZScpLndpZHRoKCk7XG5cdHNsaWRlci53aWR0aChzbGlkZVdpZHRoKTtcblx0Ly8gc2xpZGVXcmFwcGVyLndpZHRoKHNsaWRlV3JhcHBlci5jaGlsZHJlbigpLmxlbmd0aCAqIHNsaWRlV2lkdGgpO1xuXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0c2xpZGVXaWR0aCA9ICQoJy5zbGlkZScpLndpZHRoKCk7XG5cdFx0c2xpZGVyLndpZHRoKHNsaWRlV2lkdGgpO1xuXHR9KTtcblxuXHQkKCcuc2xpZGVyX19hcnJvd19uZXh0JykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRzZXRUaW1lb3V0KG5leHRTbGlkZSwgNTAwKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdCQoJy5zbGlkZXJfX2Fycm93X3ByZXYnKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdHNldFRpbWVvdXQocHJldlNsaWRlLCA1MDApO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSk7XG59KTtcblxuZnVuY3Rpb24gbmV4dFNsaWRlKCl7XG5cdHZhciBjdXJyZW50U2xpZGUgPSBzbGlkZVdyYXBwZXIuZGF0YSgnY3VycmVudCcpO1xuXHRjdXJyZW50U2xpZGUrKztcblx0aWYgKGN1cnJlbnRTbGlkZSA+PSBzbGlkZVdyYXBwZXIuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRzbGlkZVdyYXBwZXIuY3NzKCdsZWZ0JywgLShjdXJyZW50U2xpZGUtMikgKiBzbGlkZVdpZHRoKTsgIFxuXHRcdHNsaWRlV3JhcHBlci5hcHBlbmQoc2xpZGVXcmFwcGVyLmNoaWxkcmVuKCkuZmlyc3QoKS5jbG9uZSgpKTsgXG5cdFx0c2xpZGVXcmFwcGVyLmNoaWxkcmVuKCkuZmlyc3QoKS5yZW1vdmUoKTtcblx0XHRjdXJyZW50U2xpZGUtLTtcblx0fVxuXHRcdHNsaWRlV3JhcHBlci5hbmltYXRlKHtsZWZ0OiAtY3VycmVudFNsaWRlICogc2xpZGVXaWR0aH0sIDUwMCkuZGF0YSgnY3VycmVudCcsIGN1cnJlbnRTbGlkZSk7XG59XG5cbmZ1bmN0aW9uIHByZXZTbGlkZSgpe1xuXHR2YXIgY3VycmVudFNsaWRlID0gcGFyc2VJbnQoc2xpZGVXcmFwcGVyLmRhdGEoJ2N1cnJlbnQnKSk7XG5cdGN1cnJlbnRTbGlkZS0tO1xuXHRpZiAoY3VycmVudFNsaWRlIDwgMCkge1xuXHRcdHNsaWRlV3JhcHBlci5jc3MoJ2xlZnQnLC0oY3VycmVudFNsaWRlICsgMikgKiBzbGlkZVdpZHRoKTsgIFxuXHRcdHNsaWRlV3JhcHBlci5wcmVwZW5kKHNsaWRlV3JhcHBlci5jaGlsZHJlbigpLmxhc3QoKS5jbG9uZSgpKTsgXG5cdFx0c2xpZGVXcmFwcGVyLmNoaWxkcmVuKCkubGFzdCgpLnJlbW92ZSgpO1xuXHRcdGN1cnJlbnRTbGlkZSsrOyAgIFxuXHR9XG5cdHNsaWRlV3JhcHBlci5hbmltYXRlKHtsZWZ0OiAtY3VycmVudFNsaWRlICogc2xpZGVXaWR0aH0sIDUwMCkuZGF0YSgnY3VycmVudCcsIGN1cnJlbnRTbGlkZSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9