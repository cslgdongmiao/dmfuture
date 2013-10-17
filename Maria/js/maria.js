$(function(){
	change();
    inte();
    shwn()
    scrolls();
    
});




function inte(){
	 i=setInterval("slippic();",1000);
}

 function change(){
  for (var i = 1; i <5; i++) {
    $("#pic"+i).css("left",(i-1)*940+"px");
  };
}
function slippic(){
  for (var i = 1; i<5; i++) {
    var picleft=$("#pic"+i).position().left;
     picleft=picleft-940;
     if (picleft<-940) {
      $("#pic"+i).css({
        "left":940*2+"px",
        "z-index":"-2"
      });
    }else{
      $("#pic"+i).css({
        "z-index":"4"
      });
      $("#pic"+i).animate({left:picleft+"px"},"slow");
    }
  };
}
function shwn(){
   $(".picc").mouseover(function(){
   	$(this).find(".blogh").css("display","block");
   });
   $(".picc").mouseout(function(){
   		$(this).find(".blogh").css("display","none");
   });

   $(".piccsmall").mouseover(function(){
   	$(this).find(".bloghs").css("display","block");
   });
   $(".piccsmall").mouseout(function(){
   		$(this).find(".bloghs").css("display","none");
   });
}

function scrolls(){
  var navH = $("#midnav").offset().top;
  $(window).scroll( function() {
    var scroH=$(this).scrollTop();
   if(scroH>=navH){  
      $("#midnav").css({"position":"fixed","top":0});  
      }else
      {  
         $("#midnav").css({"position":"static"});  
     }  
  
})  
  
}
