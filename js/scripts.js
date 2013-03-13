$(document).ready(function() {

	$('.curtains > li').css('position', 'fixed');

	$('.curtains').curtain();

	var scrollorama = $.scrollorama({
		blocks : '.curtains'
	});

	scrollorama.animate('#resume h1', {
		duration : 200,
		property : 'left',
		end : -860
	});
	
	scrollorama.animate('#resume p', {
		duration : 300,
		property : 'top',
		start: 80,
		end : 500
		
	});
	
	scrollorama.animate('#band ul li:nth-child(1)', {
		delay : 0,
		duration : 993,
		property : 'top',
		start : 840,
		end : 640
	});
	scrollorama.animate('#band ul li:nth-child(2)', {
		delay : 0,
		duration : 993,
		property : 'top',
		start : 800,
		end : 340
	});
	scrollorama.animate('#band ul li:nth-child(3)', {
		delay : 0,
		duration : 993,
		property : 'top',
		start : 920,
		end : 580
	});
	scrollorama.animate('#band ul li:nth-child(4)', {
		delay : 0,
		duration : 993,
		property : 'top',
		start : 880,
		end : 320
	});
	scrollorama.animate('#band ul li:nth-child(5)', {
		delay : 0,
		duration : 993,
		property : 'top',
		start : 830,
		end : 660
	});
	scrollorama.animate('#band ul li:nth-child(6)', {
		delay : 0,
		duration : 993,
		property : 'top',
		start : 960,
		end : 400
	});
	
	scrollorama.animate('#swim-photo', {
		delay : 1500,
		duration : 970,
		property : 'rotate',
		start : -20,
		end : 20

		
		
		
		
/*		delay : 993,
		duration : 993,
		property : 'fade-in',*/
		/*start : -850,*/
		/*easing : 'easeOutBounce'*/
	});
	
	scrollorama.animate('#trap-photo', {
		delay : 2300,
		duration : 1000,
		property : 'left',
		start : 0,
		easing : 'easeInOutExpo',
	});
	
	scrollorama.animate('#nhs-photo', {
		delay : 2979,
		duration : 993,
		property : 'top',
		start : 640,
		end : 0
	});
	
	scrollorama.animate('#tri-m-photo', {
		delay : 4965,
		duration : 993,
		property : 'bottom',
		start : 500,
		end : 0
	});

	scrollorama.animate('#ping-pong h2', {
		delay : 5600,
		duration : 500,
		property : 'zoom',
		start : 0,
		end : 1.2
	});
	
	

	
	
	
	scrollorama.animate('#connect-photo', {
		delay : 8800,
		duration : 250,
		property : 'left',
		start : -200,
		end : 0
	});

	
	
	
	
	
/*	scrollorama.animate('#spoon-photo', {
		delay : 993,
		duration : 993,
		property : 'top',
		start : 100,
		end : -300
	});

	scrollorama.animate('#line25-photo', {
		delay : 993,
		duration : 1986,
		property : 'rotate',
		start : -10,
		end : 10
	});

	scrollorama.animate('#gaming.btn', {
		delay : 2000,
		duration : 993,
		property : 'left',
		start : -800,
		easing : 'easeOutBounce'
	});

	scrollorama.animate('#cs ul li:nth-child(1)', {
		delay : 2979,
		duration : 993,
		property : 'top',
		start : 840,
		end : 640
	});
	scrollorama.animate('#cs ul li:nth-child(2)', {
		delay : 2979,
		duration : 993,
		property : 'top',
		start : 800,
		end : 640
	});
	scrollorama.animate('#cs ul li:nth-child(3)', {
		delay : 2979,
		duration : 993,
		property : 'top',
		start : 920,
		end : 580
	});
	scrollorama.animate('#cs ul li:nth-child(4)', {
		delay : 2979,
		duration : 993,
		property : 'top',
		start : 880,
		end : 620
	});
	scrollorama.animate('#cs ul li:nth-child(5)', {
		delay : 2979,
		duration : 993,
		property : 'top',
		start : 830,
		end : 660
	});
	scrollorama.animate('#cs ul li:nth-child(6)', {
		delay : 2979,
		duration : 993,
		property : 'top',
		start : 960,
		end : 600
	});

	scrollorama.animate('#jake h2', {
		delay : 4500,
		duration : 900,
		property : 'top',
		start : 0,
		easing : 'easeOutBounce'
	});*/
});