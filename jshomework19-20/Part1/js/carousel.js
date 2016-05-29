$(function() {
	$('.jcarousel').jcarousel({
		wrap: 'circular',	
	});
	$('.jcarousel-pagination').jcarouselPagination({
		item: function(page) {
			return '<a class = "number" href="#' + page + '"></a>';
		}
	})
	.on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active').append('<div class="active__block"></div>');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active').children().remove();
    });
	$('.number:first').addClass('active').append('<div class="active__block"></div>');
	
	$('.jcarousel').jcarouselAutoscroll({
		interval: 5000,
		target: '+=1',
		autostart: true
	});
});