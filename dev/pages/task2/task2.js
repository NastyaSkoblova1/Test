'use strict';

const carousel = $('.slider-wrap');
let slideWidth;

$(function() {
	slideWidth = $('.slider').width();

	$(window).resize(function() {
		slideWidth = $('.slider').width();
		console.log(slideWidth);
	});

	$('.slider__arrow_prev').click(function() {
		changeSlide(1);
	});

	$('.slider__arrow_next').click(function() {
		changeSlide(-1);
	});
});

function changeSlide(index) {
	if (carousel.hasClass('transition')) return;
	carousel.addClass('transition').css('transform', 'translateX(' + (index * slideWidth) + 'px)');

	setTimeout(function() {

		if (index === 1) {
			$('.slide:first').before($('.slide:last'));
		} else if (index === -1) {
			$('.slide:last').after($('.slide:first'));
		}

		carousel.removeClass('transition');
		carousel.css('transform','translateX(0px)');

	}, 800);

}