$(document).ready(function() {
    
    $("#down").click(function () {
    	$("body, html").animate({scrollTop: $(window).height()}, 1000);
    });
    $("#up").click(function () {
    	$("body, html").animate({scrollTop: 0}, 1000);
    });
    
    $(window).resize(function() {
      $("#top").css("height", $(window).height());
    }).resize();
});
