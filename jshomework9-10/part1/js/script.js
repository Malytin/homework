$(function() {
	$('.jcarousel').jcarousel({
		// Configuration goes here
	});
	$('.jcarousel-prev').jcarouselControl({ target: '-=1' });
	$('.jcarousel-next').jcarouselControl({ target: '+=1' });
	$('.jcarousel-pagination').jcarouselPagination({
		item: function(page) {
			return '<a class = "number" href="#' + page + '"></a>';
		}
	})
	.on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active');
	})
		.on('jcarouselpagination:inactive', 'a', function() {
			$(this).removeClass('active');
		});
	$('.number:first').addClass('active');

		//.jcarouselAutoscroll({
		//	interval: 3000,
		//	target: '+=1',
		//	autostart: true
		//});
	$('.jcarousel').jcarousel({ wrap: 'circular' });
/*Select*/
	$("#default-usage-select").selectbox();
});
