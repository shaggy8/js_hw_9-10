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


	var jcarWidth = {
		jcar: $('.jcarousel').width(),
		pagin: $('.jcarousel-pagination').outerWidth(),
		};

	$('.jcarousel-pagination').css({
		'left': jcarWidth.jcar / 2 - jcarWidth.pagin / 2,
	});
	$('.jcarousel-pagination a:first-child').css({
		'background': 'yellow',
	});
	

	$('.jcarousel').on('click.color', function(event) {
		var $target = $(event.target);
		var $pages = $('.jcarousel-pagination a');

		if ($target.is('.jcarousel-pagination a')) {
			$pages.css({'background': ''});
			$target.css({'background': 'yellow'});
			return;
		}

		var page = - parseFloat($('.jcarousel-list').css('left')) /
			$('.jcarousel').width();

		if ($target.is('.jcarousel-prev')) {
			$pages.css({'background': ''});
			var getPage = $pages.get(page - 1);
			$(getPage).css({'background': 'yellow'});
		};

		if ($target.is('.jcarousel-next')) {
			if ((page + 1) == $pages.length) page = - 1;
			$pages.css({'background': ''});
			var getPage = $pages.get(page + 1);
			$(getPage).css({'background': 'yellow'});
		};
	});



	$('#jqcheck1, #jqcheck2')
		.css({'display': 'none',})
		.parent()
		.addClass('jq-check');

	var $spanCheck = $('.jq-check');

		$('.jquery-check').mousedown(function(event) {
		var $target = $(event.target);
		// var checkId;

		if (!($target.is('label')) || $target.is('span.jq-check'))
			return;

		if ($target.is('label')) {
			checkId = '#' + $target.attr('for');
		}

		if ($(checkId).prop('checked')) {
			$(checkId).parent().css({'background-position': ''});
		} else {
			$(checkId).parent().css({'background-position': '0 17px'});
		}
	});



	$('#flowers').selectbox();
});