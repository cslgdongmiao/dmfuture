$(function(){
	change();
	inte();
	next();
	smallclick();
});
var ele;
function inte(){
     ele=setInterval("slippic();",5000);
     e2=setInterval("part2slip();",5000);

}
function change(){
  for (var i = 1; i <5; i++) {
    $("#pic"+i).css("left",(i-1)*1200+"px");
    $("#p2"+i).css("left",(i-1)*395+"px");
    $("#p4"+i).css("left",(i-1)*565+"px");
    $("#pic"+i).val((i-1)*1200);
  };
  $("#ral").hover(function(){
  	$("#redexpend").show()
  },function(){
    $("#redexpend").hide()
  });
}
function slippic(){ 
  for (var i = 1; i<5; i++) {
    var picleft=$("#pic"+i).position().left;
    picleft=picleft-1200;
    if (picleft<-1200) {
      $("#pic"+i).css({
        "left":2*1200+"px",
        "z-index" : "-2"
      });
    }else{
       $("#pic"+i).css({
        "z-index" : "6"
      });
      $("#pic"+i).animate({left:picleft+"px"},"slow");
      $("#pic"+i).val(picleft);
    }

  };
  



  for (var j = 1; j<4; j++) {
    var picslide=$("#p4"+j).position().left;
    picslide=picslide-565;
    if (picslide<-565) {
      $("#p4"+j).css({
        "left":565+"px",
        "z-index" : "-2"
      });
    }else{
       //$("#p4"+j).css({
       //"z-index" : "6"
      //});
      $("#p4"+j).animate({left:picslide+"px"},"slow");
    }
  };
}
var pindex=2;
 var picslide=2;
function smallclick(){
	$("#part1-left").css({
			"background-image":'url("images/02.jpg")'
		});
	$("#small-prev").click(function(){
		pindex=pindex-1;
		if (pindex==0) {pindex=4};
		$("#part1-left").css({
			"background-image":'url("images/0'+pindex+'.jpg")'
		});
		for (var i = 1; i <5; i++) {
			$("#r0"+i).css({
				"z-index": "2"
			});
		};
         $("#r0"+pindex).css({
				"z-index": "4"
			});

	   })
	$("#small-next").click(function(){
		pindex=pindex+1;
		if (pindex==5) {pindex=1};
		$("#part1-left").css({
			"background-image":'url("images/0'+pindex+'.jpg")'
		});
		for (var i = 1; i <5; i++) {
				$("#r0"+i).css({
					"z-index": "2"
				});
			};
	    $("#r0"+pindex).css({
					"z-index": "4"
		});
   })

}
function part2slip(){
	for (var i = 1; i<5; i++) {
    var picleft=$("#p2"+i).position().left;
    picleft=picleft-395;
    if (picleft<-395) {
      $("#p2"+i).css({
        "left":2*395+"px",
        "z-index" : "-2"
      });
    }else{
       $("#p2"+i).css({
        "z-index" : "6"
      });
      $("#p2"+i).animate({left:picleft+"px"},"slow");
    }
  };
}
function next(){
  $("#btnleft").click(function(){
    clearInterval(ele);
   for (var i = 1; i<5; i++) {
    var picleft=parseInt($("#pic"+i).val());
    picleft+=1200;
    if (picleft>1200*2) {
       $("#pic"+i).css({
        "left":2*1200+"px",
        "z-index" : "2"
      });
      picleft=-1200;
    }
    else{
         $("#pic"+i).css({
        "z-index" : "6"
        });
      }
      $("#pic"+i).animate({left:picleft+"px"},"slow");
       $("#pic"+i).val(picleft);
    }
     ele=setInterval("slippic();",5000);
  });
  $("#btnright").click(function(){
    clearInterval(ele);
   for (var i = 1; i<5; i++) {
     var picleft=parseInt($("#pic"+i).val());
    picleft-=1200;
    if (picleft<-1200) {
         $("#pic"+i).css({
          "left":2*1200+"px",
          "z-index" : "2"
        });
        picleft=1200*2;
    }else{
         $("#pic"+i).css({
        "z-index" : "6"
         });
      }
      $("#pic"+i).animate({left:picleft+"px"},"slow");
      $("#pic"+i).val(picleft);
    }
     ele=setInterval("slippic();",5000);
  });
}

