$(document).ready(function(){
	$("#nav-input-search" ).focus(function() {
	  	$( "#nav-input-search" ).addClass('focus');
	});

	$('#new-post-slide').owlCarousel({
	    loop:false,
	    margin:20,
	    nav:true,
	    dots: false,
	    autoplay: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        500:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    },
	    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
	});

	$('.cate-post-slide').owlCarousel({
	    loop:false,
	    margin:20,
	    nav:true,
	    dots: false,
	    autoplay: true,
	    responsive:{
	        0:{
	            items:2
	        },
	        500:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    },
	    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
	});
	// recently post

	$('#recent-post-tab').click(function() {
		$('#recent-tabContent #more-post').removeClass('active');
		$('#recent-tabContent #more-post').removeClass('show');
	});
});