webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var rightAnswer = 0;
	var correct = ['The Greenhornes', 'ZZ Top', 'The Killers', 'Queens of the Stone Age', 'The Last Shadow Puppets', 'Джимми Пэйдж', 'Blur', 'The Beatles'];
	var answer = [];

	var resultVariant = $('.test__result .test__result-variant');
	var resultImg = $('.test__result-wrap img');
	var resultText = $('.test__result-text');
	var nextBlock = void 0;

	$(function () {

		$('.test__radio').each(function () {
			answer.push($(this));
		});

		$('.test__radio').change(function () {
			var answers = $(this).parent('.test__answer').siblings().find('.test__radio');
			var answerText = $(this).next().text();
			answers.prop('disabled', true);
			$(this).prop('disabled', false);
			setRightAnswer(answerText);
			$('.test__btn').show();
			$('.test__btn-result').show();
		});

		$('.test__btn').click(function () {
			nextBlock = $(this).parent('.test__item').next().addClass('show');
			$(this).parent('.test__item').removeClass('show');
			$('.test__btn').hide();
			$('.test__btn-result').hide();

			return false;
		});

		$('.test__btn-result').click(function () {
			var rightAnswerPercent = rightAnswer / correct.length * 100;
			nextBlock = $(this).parent('.test__item').next().addClass('show');
			$(this).parent('.test__item').removeClass('show');
			$('.test__result .test__result-count').text(rightAnswer + '/' + correct.length);
			setResult(rightAnswerPercent);

			return false;
		});

		$('.test__restart').click(function () {
			$('form').reset();

			return false;
		});
	});

	function setRightAnswer(text) {
		for (var i = 0; i < answer.length; i++) {
			if (text == correct[i]) {
				rightAnswer++;
				console.log(rightAnswer);
			}
		}
	}

	function setResult(percent) {
		if (percent <= 25) {
			resultVariant.text('\u0412\u044B \u043D\u0435 \u0437\u043D\u0430\u0442\u043E\u043A \u0440\u043E\u043A-\u043C\u0443\u0437\u044B\u043A\u0438');
			resultImg.attr('src', 'img/task3/res1.jpg');
			resultText.text('\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0432\u044B \u043D\u0435 \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u044C \u0440\u043E\u043A-\u043C\u0443\u0437\u044B\u043A\u0438. \u0418\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043E\u0441\u043E\u0431\u043E\n\t\t \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442\u0435\u0441\u044C \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u043C \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0444\u0435\u0440\u0435. Lorem ipsum dolor sit amet,\n\t\t  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n\t\t   et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n\t\t    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n\t\t     dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n\t\t      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n\t\t       culpa qui officia deserunt mollit anim id est laborum.');
		}

		if (percent > 25 && percent <= 50) {
			resultVariant.text('\u0412\u044B - \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439 \u0440\u043E\u043A\u0435\u0440');
			resultImg.attr('src', 'img/task3/res2.jpg');
			resultText.text('\u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0432\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u0441\u044C \u0441 \u0440\u043E\u043A-\u043C\u0443\u0437\u044B\u043A\u043E\u0439 \u0438 \u0437\u043D\u0430\u0435\u0442\u0435 \n\t\t\t\u043A\u0430\u043A\u0438\u0435-\u0442\u043E \u0448\u0438\u0440\u043E\u043A\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u0444\u0430\u043A\u0442\u044B. Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n\t\t\tsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n\t\t\t dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n\t\t\t  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
		}

		if (percent > 50 && percent <= 75) {
			resultVariant.text('\u0412\u044B - \u0446\u0435\u043D\u0438\u0442\u0435\u043B\u044C \u0440\u043E\u043A-\u043C\u0443\u0437\u044B\u043A\u0438');
			resultImg.attr('src', 'img/task3/res3.jpg');
			resultText.text('\u0412\u044B \u043B\u044E\u0431\u0438\u0442\u0435 \u0440\u043E\u043A-\u043C\u0443\u0437\u044B\u043A\u0443 \u0438 \u0441\u043B\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u043C \u0432 \u043D\u0435\u0439. Lorem\n\t\t ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n\t\t  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n\t\t   ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n\t\t    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\t\t     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n\t\t      deserunt mollit anim id est laborum.');
		}

		if (percent > 75) {
			resultVariant.text('\u0412\u044B - \u043F\u0440\u043E\u0436\u0436\u0451\u043D\u043D\u044B\u0439 \u0440\u043E\u043A\u0435\u0440');
			resultImg.attr('src', 'img/task3/res4.jpg');
			resultText.text('\u0412\u044B \u0432\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u044B. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n\t\t sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n\t\t  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n\t\t   commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n\t\t    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n\t\t     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL3Rhc2szL3Rhc2szLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubGV0IHJpZ2h0QW5zd2VyID0gMDtcbmNvbnN0IGNvcnJlY3QgPSBbJ1RoZSBHcmVlbmhvcm5lcycsICdaWiBUb3AnLCAnVGhlIEtpbGxlcnMnLCAnUXVlZW5zIG9mIHRoZSBTdG9uZSBBZ2UnLFxuXHRcdFx0XHQnVGhlIExhc3QgU2hhZG93IFB1cHBldHMnLCAn0JTQttC40LzQvNC4INCf0Y3QudC00LYnLCAnQmx1cicsICdUaGUgQmVhdGxlcyddO1xubGV0IGFuc3dlciA9IFtdO1xuXG5jb25zdCByZXN1bHRWYXJpYW50ID0gJCgnLnRlc3RfX3Jlc3VsdCAudGVzdF9fcmVzdWx0LXZhcmlhbnQnKTtcbmNvbnN0IHJlc3VsdEltZyA9ICQoJy50ZXN0X19yZXN1bHQtd3JhcCBpbWcnKTtcbmNvbnN0IHJlc3VsdFRleHQgPSAkKCcudGVzdF9fcmVzdWx0LXRleHQnKTtcbmxldCBuZXh0QmxvY2s7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0JCgnLnRlc3RfX3JhZGlvJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRhbnN3ZXIucHVzaCgkKHRoaXMpKTtcblx0fSk7XG5cblx0JCgnLnRlc3RfX3JhZGlvJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXHRcdGxldCBhbnN3ZXJzID0gJCh0aGlzKS5wYXJlbnQoJy50ZXN0X19hbnN3ZXInKS5zaWJsaW5ncygpLmZpbmQoJy50ZXN0X19yYWRpbycpO1xuXHRcdGxldCBhbnN3ZXJUZXh0ID0gJCh0aGlzKS5uZXh0KCkudGV4dCgpO1xuXHRcdGFuc3dlcnMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHQkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdHNldFJpZ2h0QW5zd2VyKGFuc3dlclRleHQpO1xuXHRcdCQoJy50ZXN0X19idG4nKS5zaG93KCk7XG5cdFx0JCgnLnRlc3RfX2J0bi1yZXN1bHQnKS5zaG93KCk7XG5cdH0pO1xuXG5cdCQoJy50ZXN0X19idG4nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRuZXh0QmxvY2sgPSAkKHRoaXMpLnBhcmVudCgnLnRlc3RfX2l0ZW0nKS5uZXh0KCkuYWRkQ2xhc3MoJ3Nob3cnKTtcblx0XHQkKHRoaXMpLnBhcmVudCgnLnRlc3RfX2l0ZW0nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdCQoJy50ZXN0X19idG4nKS5oaWRlKCk7XG5cdFx0JCgnLnRlc3RfX2J0bi1yZXN1bHQnKS5oaWRlKCk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdCQoJy50ZXN0X19idG4tcmVzdWx0JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0bGV0IHJpZ2h0QW5zd2VyUGVyY2VudCA9IHJpZ2h0QW5zd2VyIC8gY29ycmVjdC5sZW5ndGggKiAxMDA7XG5cdFx0bmV4dEJsb2NrID0gJCh0aGlzKS5wYXJlbnQoJy50ZXN0X19pdGVtJykubmV4dCgpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0JCh0aGlzKS5wYXJlbnQoJy50ZXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblx0XHQkKCcudGVzdF9fcmVzdWx0IC50ZXN0X19yZXN1bHQtY291bnQnKS50ZXh0KGAke3JpZ2h0QW5zd2VyfS8ke2NvcnJlY3QubGVuZ3RofWApO1xuXHRcdHNldFJlc3VsdChyaWdodEFuc3dlclBlcmNlbnQpO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcblxuXHQkKCcudGVzdF9fcmVzdGFydCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoJ2Zvcm0nKS5yZXNldCgpO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBzZXRSaWdodEFuc3dlcih0ZXh0KSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYW5zd2VyLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRleHQgPT0gY29ycmVjdFtpXSkge1xuXHRcdFx0cmlnaHRBbnN3ZXIrKztcblx0XHRcdGNvbnNvbGUubG9nKHJpZ2h0QW5zd2VyKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0UmVzdWx0KHBlcmNlbnQpIHtcblx0aWYgKHBlcmNlbnQgPD0gMjUpIHtcblx0XHRyZXN1bHRWYXJpYW50LnRleHQoYNCS0Ysg0L3QtSDQt9C90LDRgtC+0Log0YDQvtC6LdC80YPQt9GL0LrQuGApO1xuXHRcdHJlc3VsdEltZy5hdHRyKCdzcmMnLCAnaW1nL3Rhc2szL3JlczEuanBnJyk7XG5cdFx0cmVzdWx0VGV4dC50ZXh0KGDQktC10YDQvtGP0YLQvdC+LCDQstGLINC90LUg0LvRjtCx0LjRgtC10LvRjCDRgNC+0Lot0LzRg9C30YvQutC4LiDQmNC70Lgg0L/RgNC+0YHRgtC+INC90LUg0L7RgdC+0LHQvlxuXHRcdCDQuNC90YLQtdGA0LXRgdGD0LXRgtC10YHRjCDQv9GA0L7QuNGB0YXQvtC00Y/RidC40Lwg0LIg0LTQsNC90L3QvtC5INGB0YTQtdGA0LUuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LFxuXHRcdCAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmVcblx0XHQgICBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvblxuXHRcdCAgICB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmVcblx0XHQgICAgIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXRcblx0XHQgICAgICBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpblxuXHRcdCAgICAgICBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5gKTtcblx0fVxuXG5cdGlmIChwZXJjZW50ID4gMjUgJiYgcGVyY2VudCA8PSA1MCkge1xuXHRcdHJlc3VsdFZhcmlhbnQudGV4dChg0JLRiyAtINC90LDRh9C40L3QsNGO0YnQuNC5INGA0L7QutC10YBgKTtcblx0XHRyZXN1bHRJbWcuYXR0cignc3JjJywgJ2ltZy90YXNrMy9yZXMyLmpwZycpO1xuXHRcdHJlc3VsdFRleHQudGV4dChg0KHQutC+0YDQtdC1INCy0YHQtdCz0L4sINCy0Ysg0YLQvtC70YzQutC+INC30L3QsNC60L7QvNC40YLQtdGB0Ywg0YEg0YDQvtC6LdC80YPQt9GL0LrQvtC5INC4INC30L3QsNC10YLQtSBcblx0XHRcdNC60LDQutC40LUt0YLQviDRiNC40YDQvtC60L7QuNC30LLQtdGB0YLQvdGL0LUg0YTQsNC60YLRiy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgXG5cdFx0XHRzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIFxuXHRcdFx0cXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmVcblx0XHRcdCBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludFxuXHRcdFx0ICBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLmApO1xuXHR9XG5cblx0aWYgKHBlcmNlbnQgPiA1MCAmJiBwZXJjZW50IDw9IDc1KSB7XG5cdFx0cmVzdWx0VmFyaWFudC50ZXh0KGDQktGLIC0g0YbQtdC90LjRgtC10LvRjCDRgNC+0Lot0LzRg9C30YvQutC4YCk7XG5cdFx0cmVzdWx0SW1nLmF0dHIoJ3NyYycsICdpbWcvdGFzazMvcmVzMy5qcGcnKTtcblx0XHRyZXN1bHRUZXh0LnRleHQoYNCS0Ysg0LvRjtCx0LjRgtC1INGA0L7Qui3QvNGD0LfRi9C60YMg0Lgg0YHQu9C10LTQuNGC0LUg0LfQsCDQv9GA0L7QuNGB0YXQvtC00Y/RidC40Lwg0LIg0L3QtdC5LiBMb3JlbVxuXHRcdCBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudFxuXHRcdCAgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uXG5cdFx0ICAgdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yXG5cdFx0ICAgIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG5cdFx0ICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhXG5cdFx0ICAgICAgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYCk7XG5cdH1cblxuXHRpZiAocGVyY2VudCA+IDc1KSB7XG5cdFx0cmVzdWx0VmFyaWFudC50ZXh0KGDQktGLIC0g0L/RgNC+0LbQttGR0L3QvdGL0Lkg0YDQvtC60LXRgGApO1xuXHRcdHJlc3VsdEltZy5hdHRyKCdzcmMnLCAnaW1nL3Rhc2szL3JlczQuanBnJyk7XG5cdFx0cmVzdWx0VGV4dC50ZXh0KGDQktGLINCy0LXQu9C40LrQvtC70LXQv9C90YsuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsXG5cdFx0IHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkXG5cdFx0ICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxuXHRcdCAgIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXRcblx0XHQgICAgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0XG5cdFx0ICAgICBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvcGFnZXMvdGFzazMvdGFzazMuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=