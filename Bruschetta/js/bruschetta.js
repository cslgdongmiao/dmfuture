$(function(){
	change();
	nextclick();
	inte();
});
function inte(){
	$("#allow").hide();
}
function change(){
	$("#navli1").hover(function(){
      $("#hideplace1").show();
	},function(){
      $("#hideplace1").css("display","none");
	});
	$("#navli2").hover(function(){
      $("#hideplace2").show();
	},function(){
      $("#hideplace2").css("display","none");
	});
	$("#navli3").hover(function(){
      $("#hideplace3").show();
	},function(){
      $("#hideplace3").css("display","none");
	});
	$("#navli4").hover(function(){
      $("#hideplace4").show();
	},function(){
      $("#hideplace4").css("display","none");
	});
	$("#navli5").hover(function(){
      $("#hideplace5").show();
	},function(){
      $("#hideplace5").css("display","none");
	});
}

function nextclick(){

	$("#next").click(function(){
		$("#allow").show();
		var dataslide4=$("#slide40").css("left");
		dataslide4=parseInt(dataslide4)-1165;
		if (dataslide4<980) {
			$(this).hide();
		}
		var slide1=$(".slideone").css("left");
        slide1=parseInt(slide1)-1165;
		$(".slideone").animate({left:slide1},"slow");
		for (var i =0; i<8; i++) {
			if (i==0) {
				var data=$("#slide2"+i).css("left");
					data=parseInt(data)-1165;
               $("#slide2"+i).animate({left:data},1000);
			}else if (i==1) {
                             var leftdata=$("#slide2"+i).css("left");
									leftdata=parseInt(leftdata)-1165;
									$("#slide2"+i).animate({left:leftdata},1300);

							}else if (i==2) {
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide2"+i).animate({left:leftdata},1600);

							}else if (i==3) {
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide2"+i).animate({left:leftdata},2000);
							}else if (i==4) {
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide2"+i).animate({left:leftdata},1500);
							}else{
								$("#slide2"+i).hide();
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide2"+i).animate({left:leftdata},1000);
								$("#slide2"+i).show(1500);
							}
			
		};
		for (var i =0; i<8; i++) {
			if (i==0) {
				var data=$("#slide3"+i).css("left");
					data=parseInt(data)-1165;
               $("#slide3"+i).animate({left:data},1000);
			}else if (i==1) {
                             var leftdata=$("#slide3"+i).css("left");
									leftdata=parseInt(leftdata)-1165;
									$("#slide3"+i).animate({left:leftdata},1300);

							}else if (i==2) {
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide3"+i).animate({left:leftdata},1600);

							}else if (i==3) {
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide3"+i).animate({left:leftdata},2000);
							}else if (i==4) {
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide3"+i).animate({left:leftdata},1500);
							}else{
								$("#slide3"+i).hide();
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide3"+i).animate({left:leftdata},1000);
								$("#slide3"+i).show(1500);
							}
			
		};
		for (var i =0; i<8; i++) {
			if (i==0) {
				var data=$("#slide4"+i).css("left");
					data=parseInt(data)-1165;
               $("#slide4"+i).animate({left:data},1000);
			}else if (i==1) {
                             var leftdata=$("#slide4"+i).css("left");
									leftdata=parseInt(leftdata)-1165;
									$("#slide4"+i).animate({left:leftdata},1300);

							}else if (i==2) {
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide4"+i).animate({left:leftdata},1600);

							}else if (i==3) {
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide4"+i).animate({left:leftdata},2000);
							}else if (i==4) {
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide4"+i).animate({left:leftdata},1500);
							}else{
								$("#slide4"+i).hide();
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)-1165;
								$("#slide4"+i).animate({left:leftdata},1000);
								$("#slide4"+i).show(1500);
							}
			
		};
      	
	});


	$("#allow").click(function(){
		$("#next").show();
		var dataslide1=$("#slide1").css("left");
		dataslide1=parseInt(dataslide1)+1165;
		if (dataslide1>=0) {
			$(this).hide();
		}
		else{
			$(this).show();
		}
        var slide1=$(".slideone").css("left");
        slide1=parseInt(slide1)+1165;
		$(".slideone").animate({left:slide1},"slow");
		for (var i =0; i<8; i++) {
			if (i==0) {
				var data=$("#slide2"+i).css("left");
					data=parseInt(data)+1165;
               $("#slide2"+i).animate({left:data},1000);
			}else if (i==1) {
                             var leftdata=$("#slide2"+i).css("left");
									leftdata=parseInt(leftdata)+1165;
									$("#slide2"+i).animate({left:leftdata},2000);

							}else if (i==2) {
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide2"+i).animate({left:leftdata},1400);

							}else if (i==3) {
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide2"+i).animate({left:leftdata},1300);
							}else if (i==4) {
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide2"+i).animate({left:leftdata},1600);
							}else{
								$("#slide2"+i).hide();
								var leftdata=$("#slide2"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide2"+i).animate({left:leftdata},1000);
								$("#slide2"+i).show(1500);
							}
			
		};
		for (var i =0; i<8; i++) {
			if (i==0) {
				var data=$("#slide3"+i).css("left");
					data=parseInt(data)+1165;
               $("#slide3"+i).animate({left:data},1000);
			}else if (i==1) {
                             var leftdata=$("#slide3"+i).css("left");
									leftdata=parseInt(leftdata)+1165;
									$("#slide3"+i).animate({left:leftdata},2000);

							}else if (i==2) {
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide3"+i).animate({left:leftdata},1400);

							}else if (i==3) {
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide3"+i).animate({left:leftdata},1300);
							}else if (i==4) {
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide3"+i).animate({left:leftdata},1600);
							}else{
								$("#slide3"+i).hide();
								var leftdata=$("#slide3"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide3"+i).animate({left:leftdata},1000);
								$("#slide3"+i).show(1500);
							}
			
		};
		for (var i =0; i<8; i++) {
			if (i==0) {
				var data=$("#slide4"+i).css("left");
					data=parseInt(data)+1165;
               $("#slide4"+i).animate({left:data},1000);
			}else if (i==1) {
                             var leftdata=$("#slide4"+i).css("left");
									leftdata=parseInt(leftdata)+1165;
									$("#slide4"+i).animate({left:leftdata},2000);

							}else if (i==2) {
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide4"+i).animate({left:leftdata},1400);

							}else if (i==3) {
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide4"+i).animate({left:leftdata},1300);
							}else if (i==4) {
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide4"+i).animate({left:leftdata},1600);
							}else{
								$("#slide4"+i).hide();
								var leftdata=$("#slide4"+i).css("left");
								leftdata=parseInt(leftdata)+1165;
								$("#slide4"+i).animate({left:leftdata},1000);
								$("#slide4"+i).show(1500);
							}
			
		};
	});

}