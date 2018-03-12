;(function($){
	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(this).addClass("navClose");
				$(".topNav").stop(true, true).fadeIn(300);
				$("html, body").css({
					overflow:"hidden"
				});
			}
			else{
				$(this).removeClass("navClose");
				$(".topNav").stop(true, true).fadeOut(300);
				$("html, body").css({
					overflow:"visible"
				});
			}
		});
	}

	function fixNav(){
		if($("body").hasClass("homePage")){
			$(window).on("scroll", function(){
				var topScroll = $(this).scrollTop();
				if(topScroll >= 100){
					$(".header").addClass("fixBg");
				}
				else{
					$(".header").removeClass("fixBg");
				}
			});
		}
	}

	$(function(){
		mobileNav();
		fixNav();
	});

})(jQuery);




