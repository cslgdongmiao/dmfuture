$(function(){
	 changecom();
	 changepic();
   navshown();
});

function changecom(){
    $(".notice").mouseover(function(){
    	for (var i = 1; i<6; i++) {
    	  $("#content"+i).hide();
    	};
    	var e=$(this).index()+1;
    	$("#content"+e).show();
    });

}
//var imageindex=1;
var index=1;
function changepic(){
  $("#rightpic").click(function(){
     $(".run"+index).fadeOut("slow");
    index++;
    if (index>3) {
          index=1;
       $(".run"+index).fadeIn("slow");
        }else{
          $(".run"+index).fadeIn("slow");
        }
  });
  $("#leftpic").click(function(){
     $(".run"+index).fadeOut("slow");
     index--;
    if (index==0) {
          index=3;
          $(".run"+index).fadeIn("slow");
        }else{
          $(".run"+index).fadeIn("slow");
      }
       
  });
}
function navshown(){
  $(".mininav").hover(function(){

   $(this).find(".mininavch").show();
  },function(){
     $(this).find(".mininavch").hide();
  });
}
  