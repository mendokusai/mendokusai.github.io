$(document).ready(function(){
	var last = $('#about');;

	$('body').hide();
	$('body').fadeIn('slow')
	$('#about').fadeIn('slow');
	$('#projects').hide();
	$('#contact').hide();

	$('#about_link').on('click', function(){
		if (last) {
			last.slideUp(400).fadeOut().delay(1000);
		} else if (last === '#about'){
			console.log(last);
		}
		$('#about').slideDown(400).fadeIn('slow');
		last = $('#about');
	});

	$('#proj_link').on('click', function(){
		if (last) {
			last.slideUp(400).fadeOut().delay(1000);
		} else if (last === '#projects'){
			console.log(last);
		}
		$('#projects').slideDown(400).fadeIn('slow');
		last = $('#projects');

	});

	$('#cont_link').on('click', function(){
		if (last) {
			last.slideUp(400).fadeOut().delay(1000);
		} else if (last === '#contact'){
			console.log(last);
		}
		$('#contact').slideDown(400).fadeIn('slow');
		last = $('#contact');
	});
});