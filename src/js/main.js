$(function () {	
	
	// CAROUSEL
	$('#carousel').carousel({
	  interval: 4000
	})

	$('.carousel .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');	
	  	}
		
	  	next.children(':first-child').clone().appendTo($(this));

	  	for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			
		next.children(':first-child').clone().appendTo($(this));
	  }
	});
	
	
	// OVERLAY_CLOSED-VENUE
	$('.closed .venues__item_info').prepend('<img src="img/venue-disabled.png" alt="venue_closed">');
	
	$('.closed .venues__item_info .btn__icon').html('Find out more');
	
});
