$(function(){
	change();
    inte();
    inputevent();
});
function inte(){
	 i=setInterval("slippic();",5000);
}
function change(){
  for (var i = 1; i <5; i++) {
    $("#pic"+i).css("left",(i-1)*963+"px");
  };
}
function slippic(){ 
 
  for (var i = 1; i<5; i++) {
    var picleft=$("#pic"+i).position().left;
    picleft=picleft-963;
    if (picleft<-963) {
      $("#pic"+i).css({
        "left":963*2+"px",
        "z-index" : "-2"
      });
    }else{
       $("#pic"+i).css({
        "z-index" : "6"
      });
      $("#pic"+i).animate({left:picleft+"px"},"slow");
    }
  };
}
function inputevent(){
  $(".linput").focus(function(){
    $(this).attr("value","");
  });
  $("#input1").focusout(function(){
    $(this).attr("value","Name");
  });
    
  $("#input2").focusout(function(){
    $(this).attr("value","Email");
  });
  $("#input3").focusout(function(){
    $(this).attr("value","Telephone");
  });
  $("#forma").focus(function(){
    $(this).attr("value","");
  });
  $("#forma").focusout(function(){
     $(this).attr("value","Enquiry");
  });
}