webpackJsonp([3],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var nextBlock = void 0;
	var rightAnswer = 0;
	var correct = [2, 7, 9, 15, 20, 22, 28, 30];
	var resultVariant = $('.test__result .test__result-variant');
	var resultImg = $('.test__result-wrap img');
	var resultText = $('.test__result-text');

	$(function () {

		$('.test__radio').change(function () {
			$('.test__btn').show();
			$('.test__btn-result').show();
		});

		$('.test__btn').click(function () {
			var answerId = $(this).siblings('.test__answers').find('.test__radio:checked').attr('id');
			nextBlock = $(this).parent('.test__item').next().addClass('show');
			$(this).parent('.test__item').removeClass('show');
			$('.test__btn').hide();
			$('.test__btn-result').hide();

			setRightAnswer(answerId);

			return false;
		});

		$('.test__btn-result').click(function () {
			var answerId = $(this).siblings('.test__answers').find('.test__radio:checked').attr('id');
			var rightAnswerPercent = rightAnswer / correct.length * 100;
			nextBlock = $(this).parent('.test__item').next().addClass('show');
			$(this).parent('.test__item').removeClass('show');

			setRightAnswer(answerId);

			setResult(rightAnswerPercent);

			return false;
		});

		$('.test__restart').click(function () {
			$('form').reset();

			return false;
		});
	});

	function setRightAnswer(text) {
		for (var i = 0; i < correct.length; i++) {
			if (text == correct[i]) {
				rightAnswer++;
				console.log(rightAnswer);
			}
		}
	}

	function setResult(percent) {
		$('.test__result .test__result-count').text(rightAnswer + '/' + correct.length);

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

	// const test = [
	// 	{
	// 		id: 1,
	// 		question: '',
	// 		answers: [],
	// 		rightAnswer: 2,
	// 		img: '',
	// 	},
	// 	{
	// 		id: 2,
	// 		question: '',
	// 		answers: [],
	// 		rightAnswer: 2,
	// 		img: '',
	// 	},
	// ];

	// const testContainer = document.querySelector('.test');

	// test.forEach((item) => {
	// 	testContainer.appendChild(`
	// 		<div class="test__item">
	// 			<div class="test__quest">
	// 				<div class="test__quest-img"><img src="${item.img}" alt="Jack White"></div>
	// 				<div class="test__quest-text">${item.question}</div>
	// 			</div>
	// 			<div class="test__answers">
	// 			<form>

	// 			${item.answers.forEach(answer => html`
	// 					<tr>$${addr.first}</tr>
	// 					<tr>$${addr.last}</tr>
	// 			`)}
	// 				<div class="test__answer">
	// 					<input class="test__radio" type="radio" name="white" id="1">
	// 					<label for="1">The Raconteurs</label>
	// 				</div>
	// 			</form>
	// 		</div>
	// 		<button class="test__btn">Дальше</button>
	// 	</div>
	// 	`)
	// 	item.answers.forEach((answer) => {

	// 	});
	// })

	// const test = (function(element, answers) {
	// 	return {
	// 		setAnswer: function () {

	// 		}
	// 	}

	// 	TestConfig.prototype.check = function(rightAnswers) {
	// 		const answer = document.querySelectorAll('.test__btn._check');
	// 		// const rightAnswerCount = 0;

	// 		answer.addEventListener('click', function() {
	// 			console.log(this);
	// 		});
	// 	};

	// }());

	// new TestConfig({
	// 	rightAnswers: [1, 2, 3]
	// });
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGV2L3BhZ2VzL3Rhc2szL3Rhc2szLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBuZXh0QmxvY2s7XHJcbmxldCByaWdodEFuc3dlciA9IDA7XHJcbmNvbnN0IGNvcnJlY3QgPSBbMiwgNywgOSwgMTUsIDIwLCAyMiwgMjgsIDMwXTtcclxuY29uc3QgcmVzdWx0VmFyaWFudCA9ICQoJy50ZXN0X19yZXN1bHQgLnRlc3RfX3Jlc3VsdC12YXJpYW50Jyk7XHJcbmNvbnN0IHJlc3VsdEltZyA9ICQoJy50ZXN0X19yZXN1bHQtd3JhcCBpbWcnKTtcclxuY29uc3QgcmVzdWx0VGV4dCA9ICQoJy50ZXN0X19yZXN1bHQtdGV4dCcpO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcblx0JCgnLnRlc3RfX3JhZGlvJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLnRlc3RfX2J0bicpLnNob3coKTtcclxuXHRcdCQoJy50ZXN0X19idG4tcmVzdWx0Jykuc2hvdygpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcudGVzdF9fYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgYW5zd2VySWQgPSAkKHRoaXMpLnNpYmxpbmdzKCcudGVzdF9fYW5zd2VycycpLmZpbmQoJy50ZXN0X19yYWRpbzpjaGVja2VkJykuYXR0cignaWQnKTtcclxuXHRcdG5leHRCbG9jayA9ICQodGhpcykucGFyZW50KCcudGVzdF9faXRlbScpLm5leHQoKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoJy50ZXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdCQoJy50ZXN0X19idG4nKS5oaWRlKCk7XHJcblx0XHQkKCcudGVzdF9fYnRuLXJlc3VsdCcpLmhpZGUoKTtcclxuXHJcblx0XHRzZXRSaWdodEFuc3dlcihhbnN3ZXJJZCk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcudGVzdF9fYnRuLXJlc3VsdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IGFuc3dlcklkID0gJCh0aGlzKS5zaWJsaW5ncygnLnRlc3RfX2Fuc3dlcnMnKS5maW5kKCcudGVzdF9fcmFkaW86Y2hlY2tlZCcpLmF0dHIoJ2lkJyk7XHJcblx0XHRsZXQgcmlnaHRBbnN3ZXJQZXJjZW50ID0gcmlnaHRBbnN3ZXIgLyBjb3JyZWN0Lmxlbmd0aCAqIDEwMDtcclxuXHRcdG5leHRCbG9jayA9ICQodGhpcykucGFyZW50KCcudGVzdF9faXRlbScpLm5leHQoKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoJy50ZXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHJcblx0XHRzZXRSaWdodEFuc3dlcihhbnN3ZXJJZCk7XHJcblxyXG5cdFx0c2V0UmVzdWx0KHJpZ2h0QW5zd2VyUGVyY2VudCk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcudGVzdF9fcmVzdGFydCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnZm9ybScpLnJlc2V0KCk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNldFJpZ2h0QW5zd2VyKHRleHQpIHtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNvcnJlY3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmICh0ZXh0ID09IGNvcnJlY3RbaV0pIHtcclxuXHRcdFx0cmlnaHRBbnN3ZXIrKztcclxuXHRcdFx0Y29uc29sZS5sb2cocmlnaHRBbnN3ZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UmVzdWx0KHBlcmNlbnQpIHtcclxuXHQkKCcudGVzdF9fcmVzdWx0IC50ZXN0X19yZXN1bHQtY291bnQnKS50ZXh0KGAke3JpZ2h0QW5zd2VyfS8ke2NvcnJlY3QubGVuZ3RofWApO1xyXG5cclxuXHRpZiAocGVyY2VudCA8PSAyNSkge1xyXG5cdFx0cmVzdWx0VmFyaWFudC50ZXh0KGDQktGLINC90LUg0LfQvdCw0YLQvtC6INGA0L7Qui3QvNGD0LfRi9C60LhgKTtcclxuXHRcdHJlc3VsdEltZy5hdHRyKCdzcmMnLCAnaW1nL3Rhc2szL3JlczEuanBnJyk7XHJcblx0XHRyZXN1bHRUZXh0LnRleHQoYNCS0LXRgNC+0Y/RgtC90L4sINCy0Ysg0L3QtSDQu9GO0LHQuNGC0LXQu9GMINGA0L7Qui3QvNGD0LfRi9C60LguINCY0LvQuCDQv9GA0L7RgdGC0L4g0L3QtSDQvtGB0L7QsdC+XHJcblx0XHQg0LjQvdGC0LXRgNC10YHRg9C10YLQtdGB0Ywg0L/RgNC+0LjRgdGF0L7QtNGP0YnQuNC8INCyINC00LDQvdC90L7QuSDRgdGE0LXRgNC1LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCxcclxuXHRcdCAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmVcclxuXHRcdCAgIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uXHJcblx0XHQgICAgdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlXHJcblx0XHQgICAgIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXRcclxuXHRcdCAgICAgIG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluXHJcblx0XHQgICAgICAgY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYCk7XHJcblx0fVxyXG5cclxuXHRpZiAocGVyY2VudCA+IDI1ICYmIHBlcmNlbnQgPD0gNTApIHtcclxuXHRcdHJlc3VsdFZhcmlhbnQudGV4dChg0JLRiyAtINC90LDRh9C40L3QsNGO0YnQuNC5INGA0L7QutC10YBgKTtcclxuXHRcdHJlc3VsdEltZy5hdHRyKCdzcmMnLCAnaW1nL3Rhc2szL3JlczIuanBnJyk7XHJcblx0XHRyZXN1bHRUZXh0LnRleHQoYNCh0LrQvtGA0LXQtSDQstGB0LXQs9C+LCDQstGLINGC0L7Qu9GM0LrQviDQt9C90LDQutC+0LzQuNGC0LXRgdGMINGBINGA0L7Qui3QvNGD0LfRi9C60L7QuSDQuCDQt9C90LDQtdGC0LUgXHJcblx0XHRcdNC60LDQutC40LUt0YLQviDRiNC40YDQvtC60L7QuNC30LLQtdGB0YLQvdGL0LUg0YTQsNC60YLRiy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgXHJcblx0XHRcdHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgXHJcblx0XHRcdHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlXHJcblx0XHRcdCBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludFxyXG5cdFx0XHQgIG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYCk7XHJcblx0fVxyXG5cclxuXHRpZiAocGVyY2VudCA+IDUwICYmIHBlcmNlbnQgPD0gNzUpIHtcclxuXHRcdHJlc3VsdFZhcmlhbnQudGV4dChg0JLRiyAtINGG0LXQvdC40YLQtdC70Ywg0YDQvtC6LdC80YPQt9GL0LrQuGApO1xyXG5cdFx0cmVzdWx0SW1nLmF0dHIoJ3NyYycsICdpbWcvdGFzazMvcmVzMy5qcGcnKTtcclxuXHRcdHJlc3VsdFRleHQudGV4dChg0JLRiyDQu9GO0LHQuNGC0LUg0YDQvtC6LdC80YPQt9GL0LrRgyDQuCDRgdC70LXQtNC40YLQtSDQt9CwINC/0YDQvtC40YHRhdC+0LTRj9GJ0LjQvCDQsiDQvdC10LkuIExvcmVtXHJcblx0XHQgaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnRcclxuXHRcdCAgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uXHJcblx0XHQgICB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3JcclxuXHRcdCAgICBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxyXG5cdFx0ICAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhXHJcblx0XHQgICAgICBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5gKTtcclxuXHR9XHJcblxyXG5cdGlmIChwZXJjZW50ID4gNzUpIHtcclxuXHRcdHJlc3VsdFZhcmlhbnQudGV4dChg0JLRiyAtINC/0YDQvtC20LbRkdC90L3Ri9C5INGA0L7QutC10YBgKTtcclxuXHRcdHJlc3VsdEltZy5hdHRyKCdzcmMnLCAnaW1nL3Rhc2szL3JlczQuanBnJyk7XHJcblx0XHRyZXN1bHRUZXh0LnRleHQoYNCS0Ysg0LLQtdC70LjQutC+0LvQtdC/0L3Riy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCxcclxuXHRcdCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZFxyXG5cdFx0ICBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYVxyXG5cdFx0ICAgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdFxyXG5cdFx0ICAgIGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdFxyXG5cdFx0ICAgICBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYCk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBjb25zdCB0ZXN0ID0gW1xyXG4vLyBcdHtcclxuLy8gXHRcdGlkOiAxLFxyXG4vLyBcdFx0cXVlc3Rpb246ICcnLFxyXG4vLyBcdFx0YW5zd2VyczogW10sXHJcbi8vIFx0XHRyaWdodEFuc3dlcjogMixcclxuLy8gXHRcdGltZzogJycsXHJcbi8vIFx0fSxcclxuLy8gXHR7XHJcbi8vIFx0XHRpZDogMixcclxuLy8gXHRcdHF1ZXN0aW9uOiAnJyxcclxuLy8gXHRcdGFuc3dlcnM6IFtdLFxyXG4vLyBcdFx0cmlnaHRBbnN3ZXI6IDIsXHJcbi8vIFx0XHRpbWc6ICcnLFxyXG4vLyBcdH0sXHJcbi8vIF07XHJcblxyXG4vLyBjb25zdCB0ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKTtcclxuXHJcbi8vIHRlc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4vLyBcdHRlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYFxyXG4vLyBcdFx0PGRpdiBjbGFzcz1cInRlc3RfX2l0ZW1cIj5cclxuLy8gXHRcdFx0PGRpdiBjbGFzcz1cInRlc3RfX3F1ZXN0XCI+XHJcbi8vIFx0XHRcdFx0PGRpdiBjbGFzcz1cInRlc3RfX3F1ZXN0LWltZ1wiPjxpbWcgc3JjPVwiJHtpdGVtLmltZ31cIiBhbHQ9XCJKYWNrIFdoaXRlXCI+PC9kaXY+XHJcbi8vIFx0XHRcdFx0PGRpdiBjbGFzcz1cInRlc3RfX3F1ZXN0LXRleHRcIj4ke2l0ZW0ucXVlc3Rpb259PC9kaXY+XHJcbi8vIFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHQ8ZGl2IGNsYXNzPVwidGVzdF9fYW5zd2Vyc1wiPlxyXG4vLyBcdFx0XHQ8Zm9ybT5cclxuXHJcbi8vIFx0XHRcdCR7aXRlbS5hbnN3ZXJzLmZvckVhY2goYW5zd2VyID0+IGh0bWxgXHJcbi8vIFx0XHRcdFx0XHQ8dHI+JCR7YWRkci5maXJzdH08L3RyPlxyXG4vLyBcdFx0XHRcdFx0PHRyPiQke2FkZHIubGFzdH08L3RyPlxyXG4vLyBcdFx0XHRgKX1cclxuLy8gXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGVzdF9fYW5zd2VyXCI+XHJcbi8vIFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJ0ZXN0X19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ3aGl0ZVwiIGlkPVwiMVwiPlxyXG4vLyBcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIjFcIj5UaGUgUmFjb250ZXVyczwvbGFiZWw+XHJcbi8vIFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdDwvZm9ybT5cclxuLy8gXHRcdDwvZGl2PlxyXG4vLyBcdFx0PGJ1dHRvbiBjbGFzcz1cInRlc3RfX2J0blwiPtCU0LDQu9GM0YjQtTwvYnV0dG9uPlxyXG4vLyBcdDwvZGl2PlxyXG4vLyBcdGApXHJcbi8vIFx0aXRlbS5hbnN3ZXJzLmZvckVhY2goKGFuc3dlcikgPT4ge1xyXG5cclxuLy8gXHR9KTtcclxuLy8gfSlcclxuXHJcbi8vIGNvbnN0IHRlc3QgPSAoZnVuY3Rpb24oZWxlbWVudCwgYW5zd2Vycykge1xyXG4vLyBcdHJldHVybiB7XHJcbi8vIFx0XHRzZXRBbnN3ZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbi8vIFx0XHR9XHJcbi8vIFx0fVxyXG5cclxuLy8gXHRUZXN0Q29uZmlnLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKHJpZ2h0QW5zd2Vycykge1xyXG4vLyBcdFx0Y29uc3QgYW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlc3RfX2J0bi5fY2hlY2snKTtcclxuLy8gXHRcdC8vIGNvbnN0IHJpZ2h0QW5zd2VyQ291bnQgPSAwO1xyXG5cclxuLy8gXHRcdGFuc3dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyh0aGlzKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH07XHJcblxyXG4vLyB9KCkpO1xyXG5cdFxyXG4vLyBuZXcgVGVzdENvbmZpZyh7XHJcbi8vIFx0cmlnaHRBbnN3ZXJzOiBbMSwgMiwgM11cclxuLy8gfSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L3BhZ2VzL3Rhc2szL3Rhc2szLmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9