webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	var slideIndex = 1;
	var arrowPrev = document.getElementsByClassName('slider__arrow_prev');
	var arrowNext = document.getElementsByClassName('slider__arrow_next');
	showDivs(slideIndex);

	console.log(arrowNext);

	function addPrev() {
		plusDivs(-1);
		console.log('Hello!');
	}

	arrowPrev.addEventListener('click', addPrev);

	arrowNext.onclick = function () {
		plusDivs(1);
	};

	function plusDivs(n) {
		showDivs(slideIndex += n);
	}

	function showDivs(n) {
		var i;
		var x = document.getElementsByClassName("mySlides");
		if (n > x.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = x.length;
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[slideIndex - 1].style.display = "block";
	}

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL3Rhc2syL3Rhc2syLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzbGlkZUluZGV4ID0gMTtcbnZhciBhcnJvd1ByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXJfX2Fycm93X3ByZXYnKTtcbnZhciBhcnJvd05leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXJfX2Fycm93X25leHQnKTtcbnNob3dEaXZzKHNsaWRlSW5kZXgpO1xuXG5jb25zb2xlLmxvZyhhcnJvd05leHQpO1xuXG5mdW5jdGlvbiBhZGRQcmV2KCkge1xuXHRwbHVzRGl2cygtMSk7XG5cdGNvbnNvbGUubG9nKCdIZWxsbyEnKTtcbn1cblxuYXJyb3dQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJldik7XG5cbmFycm93TmV4dC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdHBsdXNEaXZzKDEpO1xufTtcblxuZnVuY3Rpb24gcGx1c0RpdnMobikge1xuXHRzaG93RGl2cyhzbGlkZUluZGV4ICs9IG4pO1xufVxuXG5mdW5jdGlvbiBzaG93RGl2cyhuKSB7XG5cdHZhciBpO1xuXHR2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteVNsaWRlc1wiKTtcblx0aWYgKG4gPiB4Lmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfSAgICBcblx0aWYgKG4gPCAxKSB7c2xpZGVJbmRleCA9IHgubGVuZ3RofVxuXHRmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuXHRcdHhbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG5cdH1cblx0eFtzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L3BhZ2VzL3Rhc2syL3Rhc2syLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==