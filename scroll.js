$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#logo').addClass('change');
    }
    else {
    $('#logo').removeClass('change');
    }
  });
});
$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 10) {
      $('#home, #services, #projects, #team, #pricing, #blog, #contact').addClass('change');
    }
    else {
    $('#home, #services, #projects, #team, #pricing, #blog, #contact').removeClass('change');
    }
  });
});
