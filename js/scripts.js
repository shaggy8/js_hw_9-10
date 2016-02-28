jQuery(function () {
	$('.jcarousel').jcarousel({
				wrap: 'both',
				center: true,
				animation: 'slow',
	});

		$('.jcarousel-prev').jcarouselControl({
					target: '-=1'
		});

		$('.jcarousel-next').jcarouselControl({
				target: '+=1'
		});

		$('.jcarousel-pagination').jcarouselPagination({
				item: function(page) {
						return '<a href="#' + page + '">' + page + '</a>';
				}
		});

		var $jcarouselPagination = $('.jcarousel-pagination');
		var jcarPaginWidth = $jcarouselPagination.outerWidth();
		var jcarWidth = $jcarouselPagination.parent().width();

		$jcarouselPagination.css({
			'left': jcarWidth / 2 - jcarPaginWidth / 2,
		})
})