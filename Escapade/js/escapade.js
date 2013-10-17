$(function(){
	inte();
	showns();
	slide();
	stops();
	searchpic()
});
function showns(){
	/*$(".mustshown").hover(function(){
		$(this).find(".navcontent-a").css("background-image","none");
       $(this).find(".children").slideDown("slow");
	},function(){
		$(this).find(".navcontent-a").css("background-image","url('images/toptri.png')");
        $(this).find(".children").slideUp("slow");
	});*/
     $(".mustshown").mouseenter(function(){
     	$(this).find(".navcontent-a").css("background-image","none");
       $(this).find(".children").slideDown("slow");
     });
     $(".mustshown").mouseleave(function(){
     	$(this).find(".navcontent-a").css("background-image","url('images/toptri.png')");
        $(this).find(".children").slideUp("slow");
     });
}
var ele;
function inte(){
	$(".fade").fadeOut("slow");
	$("#fade1").fadeIn("slow");
	$("#slide1").animate({"margin-top":"20px"},"slow");
   ele=setInterval("slide();",2000);
}
var index=1;
function slide(){
     $("#slide"+index).animate({"margin-top":"0px"},"slow");
      if (index>4) {
    	index=1;
       }else{
    	index++;
    }
    $("#slide"+index).animate({"margin-top":"20px"},"slow");
    $(".fade").fadeOut("slow");
    $("#fade"+index).fadeIn("slow");
}
function stops(){
	$(".slidup-down").hover(function(){
		clearInterval(ele);
		$(".slidup-down").animate({"margin-top":"0px"},"slow");
		$(this).animate({"margin-top":"20px"},"slow");
		$(".fade").fadeOut("slow");
		var s=parseInt($(this).attr("vala"));
        index=s;
        $("#fade"+index).fadeIn("slow");
	},function(){
       ele=setInterval("slide();",2000);
	});
	 
}
function searchpic(){
	$("#search2").focus(function(){
		$("#search2").val("");
	});
	$("#search2").focusout(function(){
		$("#search2").val("ou chercher autre chose...");
	});
}