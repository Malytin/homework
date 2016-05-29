'use strict';

$(function () {
	var tmpl = $('#test').html();
	tmpl = _.template(tmpl);

	var content = tmpl({
		QBase: QBase,
		result: result
	});

	$('body').append(content);

	for (var i = 0; i < QBase.question.length; i++) {
		$('.check' + i).addClass('disabled' + i);
		$('.disabled0').on('change', function () {
			if (this.checked) {
				$(this).removeClass('disabled0');
				$('.disabled0').attr('disabled', 'disabled');
			} else {
				$(this).addClass('disabled0');
				$('.disabled0').removeAttr('disabled');
			}
		});
		$('.disabled1').on('change', function () {
			if (this.checked) {
				$(this).removeClass('disabled1');
				$('.disabled1').attr('disabled', 'disabled');
			} else {
				$(this).addClass('disabled1');
				$('.disabled1').removeAttr('disabled');
			}
		});
	}
	if ($('input:not(:checked)')) {
		var error = 'Choose the answers!';
		$('p').append(error);
	} else {
		$('p').empty();
	}

	$('input[type=button]').on('click', showResult);
	var result;

	function showResult() {
		var $chBox = $('input:checked');
		for (var k = 0; k < $chBox.length; k++) {
			var str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_') + 1);
			var i = +str.substr(0, str.indexOf('_'));
			var j = +str.substr(str.indexOf('_') + 1);
			if (QBase.question[i].answer[j].check) {
				result = 'Answer' + ' ' + (j + 1) + ' ' + 'on question' + ' ' + (i + 1) + ' ' + '<span class="green">' + 'true' + '</span>' + '<br></br>';
				$('p').append(result);
			} else {
				result = 'Answer' + ' ' + (j + 1) + ' ' + 'on question' + ' ' + (i + 1) + ' ' + '<span class="red">' + 'false' + '</span>' + '<br></br>';
				$('p').append(result);
			}
		}
		var checkboxes = $('input');
		for (var i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].type == 'checkbox') {
				checkboxes[i].checked = false;
			}
			$('.check0').addClass('disabled0').removeAttr('disabled');
			$('.check1').addClass('disabled1').removeAttr('disabled');
		}
	}
});

//modal form

$(function () {
	$('input[type=button]').on('click', function (e) {
		e.preventDefault();
		$('#overlay').fadeIn(400, function () {
			$('#modal_form').css('display', 'block').animate({
				opacity: 1,
				top: '30%'
			}, 200);
		});
	});

	$('#modal_close, #overlay').on('click', function () {
		$('#modal_form').animate({
			opacity: 0,
			top: '25%'
		}, 200, function () {
			$(this).css('display', 'none');
			$('#overlay').fadeOut(400);
		});
		$('p').empty();
	});
});
