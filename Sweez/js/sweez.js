$(function(){
	inte();
    change();
});
function inte(){
	var ele=setInterval("change();",2000);
}
var index=1;
function change(){
   $("#slidepic").attr("src","images/slide"+index+".jpg");
   index++;
   if (index==4) {
   	index=1;
   };
}
function change(){
	$("#header-input").focusin(function(){
		$("#header-input").val("");
	});
	$("#header-input").focusout(function(){
		$("#header-input").val("Skriv in sökord...");
	});
}