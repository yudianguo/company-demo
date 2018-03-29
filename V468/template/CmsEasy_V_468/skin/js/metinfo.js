$(document).ready(function(){
 

 	var _width = $(window).width(); 

	if(_width < 768){		
		
		$("a.dropdown-toggle").click(function(){
			event.preventDefault();
		});

		$(".navbar-toggle").click(function(){
				$(".dropdown-menu").hide();
			$(this).toggleClass("collapsed");
			$(".navbar-collapse").slideToggle();
			$(".navbar-collapse").toggleClass("in");
		});

		$(".dropdown-toggle").click(function(){
				$(".dropdown-menu").hide();
	
				if ($(this).siblings(".dropdown-menu").is(":hidden")){
					$(this).siblings(".dropdown-menu").show();
				}else{			
					$(".dropdown-menu").hide();
				}
		});

  	}else{
 		$(".dropdown").mouseover(function(){
			$(".dropdown-menu").hide();
			$(this).children(".dropdown-menu").toggle();
		});
 		$(".dropdown").mouseleave(function(){
			$(".dropdown-menu").hide();
			$(this).children(".dropdown-menu").hide();
		});

	}



 }); 