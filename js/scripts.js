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
})