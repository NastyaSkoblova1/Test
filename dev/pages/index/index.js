var slideWidth;
var slider = $('.slider');
var slideWrapper = $('.slider-wrap');

$(function() {
	slideWidth = $('.slide').width();
	slider.width(slideWidth);
	slideWrapper.width(slideWrapper.children().length * slideWidth);

	$(window).resize(function() {
		slideWidth = $('.slide').width();
		slider.width(slideWidth);
	});

	$('.slider__arrow_next').click(function(){
		nextSlide();
		return false;
	});

	$('.slider__arrow_prev').click(function(){
		prevSlide();
		return false;
	});
});

function nextSlide(){
	var currentSlide = slideWrapper.data('current');
	currentSlide++;
	if (currentSlide >= slideWrapper.children().length) {
		slideWrapper.css('left', -(currentSlide-2) * slideWidth);  
		slideWrapper.append(slideWrapper.children().first().clone()); 
		slideWrapper.children().first().remove();
		currentSlide--;
	}
		slideWrapper.animate({left: -currentSlide * slideWidth}, 500).data('current', currentSlide);
}

function prevSlide(){
	var currentSlide = parseInt(slideWrapper.data('current'));
	currentSlide--;
	if (currentSlide < 0) {
		slideWrapper.css('left',-(currentSlide + 2) * slideWidth);  
		slideWrapper.prepend(slideWrapper.children().last().clone()); 
		slideWrapper.children().last().remove();
		currentSlide++;   
	}
	slideWrapper.animate({left: -currentSlide * slideWidth}, 500).data('current', currentSlide);
}