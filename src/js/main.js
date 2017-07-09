$(function () {	
	
	// CAROUSEL
	$('.carousel__inner').slick({		
    infinite: true,
	speed: 600,
  	slidesToShow: 4,
  	slidesToScroll: 1,
		
	autoplay: true,
	autoplaySpeed: 3000,

	prevArrow:'<a class="carousel__control prev-arrow"><i class="fa fa-angle-left fa-5x" aria-hidden="true"></i></a>',
	nextArrow:'<a class="carousel__control next-arrow"><i class="fa fa-angle-right fa-5x" aria-hidden="true"></i></a>',
		
	responsive: [
		{
			breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
		},
		{
			breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
			  }
		},
		{
			breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
			  }
		},
		{
			breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
		}
	]
  	});	
	
	
	// OVERLAY_CLOSED-VENUE
	$('.closed .venues__item_info').prepend('<img src="img/venue-disabled.png" alt="venue_closed">');
	
	$('.closed .venues__item_info .btn__icon').html('Find out more');
	
	
	// VENUES__LINK
	$('.venues__item_wrapper').each(function(){
		$(this).click( function() {
			location = $(this).find('a').attr('href');
		});
		$(this).mouseover( function() {
			$(this).css('box-shadow','0px 0px 20px 2px rgba(50,50,50,0.8)');			
		});
		$(this).mouseout( function() {
			$(this).css('box-shadow','none');			
		});
		$(this).css('cursor','pointer');
	});
	
});
