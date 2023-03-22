$(document).ready(function() {
	$(window).scroll(function() {
		console,log("check")
		if ($(this).scrollTop() > 1){ 
			log.console('I am wrong');
			$('.navbar').addClass("sticky");
		}
		else{
			log.console('No');
			$('.navbar').removeClass("sticky");
		}
	});

});