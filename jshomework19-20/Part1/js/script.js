'use strict'

$(function(){
	$('.banner__link').on('click',function(){	
		var $display = $(this).parent().find('.banner__text').css('display');
		if ($display == 'none') {
			var $clickOneItem = $('.banner__link').not($(this));
			$(this).css({
				background: '#f4b60d',
				color: 'white'
			});
			$(this).find('.banner__logo').html('-').css({
				padding: '10px 17px'
			});		
			$(this).parent().find('.banner__text').css({
				display: 'block'
			});
			$(this).parent().find('.banner__text').animate({
				height: '75px',
				marginTop: '25px',
				opacity: '0.8'
			},800);	
			
			var $none = $clickOneItem.parent().find('.banner__text');
			function none(){
				$none.css({
					display: 'none'
				});	
			};
			$none.animate({
				height: '0',
				marginTop: '-25px',
				opacity: '0'
			},800);
			setTimeout(none,800);
			$clickOneItem.parent().find('.banner__text').css({
				display: 'none'
			});
			$clickOneItem.css({
				background: 'white',
				color: 'black'
			});
			$clickOneItem.find('.banner__logo').html('+').css({
				padding: '10px 15px'
			});
		} else {
			var $none = $(this).parent().find('.banner__text');
			function none(){
				$none.css({
					display: 'none'
				});	
			};
			$none.animate({
				height: '0',
				marginTop: '-25px',
				opacity: '0'
			},800);
			setTimeout(none,800);
			$(this).css({
				background: 'white',
				color: 'black'
			});
			$(this).find('.banner__logo').html('+').css({
				padding: '10px 15px'
			});
		}	
	});
});