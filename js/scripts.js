jQuery(function () {

	$('.dropdown').mouseenter(function(event) {
		var $target = $(event.target);
		$target.find('.submenu:eq(0)').show('fast');
	});

	$('.dropdown').mouseleave(function(event) {
		var $target = $(event.target);
		$target.find('.submenu:eq(0)').hide('fast');
	});

	$('.main-menu').mouseleave(function(event) {
		$('.submenu').hide('fast');
	});



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



	$('#jcheck1, #jcheck2')
		.css({'display': 'none',})
		.parent()
		.addClass('jq-check');


		$('.jquery-check').mousedown(function(event) {
		var $target = $(event.target);

		if ( !($target.is('label')) && !($target.is('.jq-check')) )
			return;

		var $input;

		if ($target.is('label')) {
			$input = $('#' + $target.attr('for'));
			if ($input.prop('checked')) {
				$input.parent().css({'background-position': ''});
			} else {
				$input.parent().css({'background-position': '0 -17px'});
			}
		};

		if ($target.is('.jq-check')) {
			$input = $target.find('input');
			if ($input.prop('checked')) {
				$input.parent().css({'background-position': ''});
				$input.prop('checked', false);
			} else {
				$input.parent().css({'background-position': '0 -17px'});
				$input.prop('checked', true);
			}
		};
	});



	$('.checkit').click(function(event) {
		event.preventDefault();
		var like = {
			'j1': $('#jcheck1').prop('checked'),
			'j2': $('#jcheck2').prop('checked'),
			's1': $('#scheck1').prop('checked'),
			's2': $('#scheck2').prop('checked'),
		};

		var flower = $('#flowers').val();
		var testing = 0;
		for (var key in like) testing += like[key];

		if (flower == 'select') {
			alert('Спочатку виберіть квітку');
		}
		else if (testing == 0) {
			alert('Натицяйте "Подобається" чи "Не подобається" відповідно до вашого смаку');
		}
		else if (testing > 2) {
			alert('Розберіться що вам подобається, і не тицяйте все підряд!!!');
		}
		else if (like.j1 && like.s1) {
			alert('Вам надзвичайно подобається ' + flower);
		}
		else if (!(like.j2 || like.s2) && (like.j1 || like.s1)) {
			alert('Вам подобається ' + flower);
		}
		else if (like.j2 && like.s2) {
			alert('Вам зовсім не до смаку ' + flower);
		}
		else if (!(like.j1 || like.s1) && (like.j2 || like.s2)) {
			alert('Вам не подобається ' + flower);
		} else {
			alert('Розберіться що вам подобається, і не тицяйте все підряд!!!');
		};
	});



	$('#flowers').selectbox();
});