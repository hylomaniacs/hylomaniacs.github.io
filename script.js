$(document).ready(function() {
    
    $("#down").click(function () {
    	$("body, html").animate({scrollTop: $(window).height()}, 1000);
    });
    $("#up").click(function () {
    	$("body, html").animate({scrollTop: 0}, 1000);
    });
    
    var marginHeightSum = 40 + 40 + 100 + $(window).height();
    var footHeight = 200;
    
    var foot = function() {
        $("#top").css("height", $(window).height());
   		$("#head").css("top", 30 + $(window).height());
        $("#wrap").height($(document).height());
        if(
            ($("#wrap").height() > $("#main").height()+marginHeightSum+footHeight)
            && ($(window).height() > $("#main").height()+marginHeightSum+footHeight)
            && ($("#wrap").height() > $(window).height())
        )
        	$("#wrap").height($(window).height());
        $("#foot").css("top", $("#wrap").height()-footHeight);
    };
    foot();
    $(window).resize(foot);
});
