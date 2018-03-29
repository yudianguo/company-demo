$(document).ready(function(){


    $(window).scroll(function () 
    {
        var htmlTop = $(document).scrollTop();
        if ( htmlTop > 10) {
            $("#nav").addClass("mini");
        }
        else {
            $("#nav").removeClass("mini");
        }
    });


	var _width = $(window).width(); 

	if(_width < 768){			
		$("#nav a.toogle").click(function(){
			event.preventDefault();
		});
 
		$(".nav-btn").click(function(){
			if ($(".nav1").is(":hidden")){
				$(this).addClass("open");
				$(".nav1").slideDown();
			}else{			
				$(this).removeClass("open");
				$(".nav1").slideUp();
				$(".nav2").slideUp();
				$(".nav3").slideUp();
				$(".nav4").slideUp();
				$(".nav5").slideUp();
			}
		});
		$(".one a.aa").click(function(){
			if ($(this).siblings(".nav2").is(":hidden")){
				$(".nav2").slideUp();
				$(this).siblings(".nav2").slideDown();
				$(".nav3").slideUp();
				$(".nav4").slideUp();
				$(".nav5").slideUp();
			}else{			
				$(this).siblings(".nav2").slideUp();
				$(".nav3").slideUp();
				$(".nav4").slideUp();
				$(".nav5").slideUp();
			}
		}); 
		$(".tow a.bb").click(function(){
			if ($(this).siblings(".nav3").is(":hidden")){
				$(".nav3").slideUp();
				$(this).siblings(".nav3").slideDown();
				$(".nav4").slideUp();
				$(".nav5").slideUp();
			}else{			
				$(this).siblings(".nav3").slideUp();
				$(".nav4").slideUp();
				$(".nav5").slideUp();
			}
		}); 
		$(".tree a.cc").click(function(){
			if ($(this).siblings(".nav4").is(":hidden")){
				$(".nav4").slideUp();
				$(this).siblings(".nav4").slideDown();
				$(".nav5").slideUp();
			}else{			
				$(this).siblings(".nav4").slideUp();
				$(".nav5").slideUp();
			}
		}); 
		$(".four a.dd").click(function(){
			if ($(this).siblings(".nav5").is(":hidden")){
				$(".nav5").slideUp();
				$(this).siblings(".nav5").slideDown();
			}else{			
				$(this).siblings(".nav5").slideUp();
			}
		});
	}else{	
		$(".one").mouseover(function(){
			$(this).children(".nav2").slideDown(200);
		});
		$(".one").mouseleave(function(){
			$(".nav2").stop();
			$(".nav2").hide();
		});
		$(".tow").mouseover(function(){
			$(this).children(".nav3").slideDown(200);
		});
		$(".tow").mouseleave(function(){
			$(".nav3").stop();
			$(".nav3").hide();
		});
		$(".tree").mouseover(function(){
			$(this).children(".nav4").slideDown(200);
		});
		$(".tree").mouseleave(function(){
			$(".nav4").stop();
			$(".nav4").hide();
		});
		$(".four").mouseover(function(){
			$(this).children(".nav5").slideDown(200);
		});
		$(".four").mouseleave(function(){
			$(".nav5").stop();
			$(".nav5").hide();
		});
	}




 });