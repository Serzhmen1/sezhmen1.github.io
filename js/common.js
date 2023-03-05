$(function () {
	new WOW().init()

	$('.hamburger').click(function () {
		$(this).toggleClass('is-active')

		if ($(this).hasClass('is-active')) {
			$('.menu').slideDown(300)
		} else {
			$('.menu').slideUp(300)
		}
	})

	$('a.yakor').on('click', function (event) {
		var $anchor = $(this)
		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr('href')).offset().top - 0,
				},
				{
					duration: 1000,
					specialEasing: {
						width: 'linear',
						height: 'easeInOutCubic',
					},
				}
			)
		event.preventDefault()
	})
})
