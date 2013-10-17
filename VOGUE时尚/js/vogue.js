$(function(){
	soso();
	shownnav();
});
function soso(){
    $("#soso").focusin(function(){
    	$(this).val("");
    });
     $("#soso").focusout(function(){
    	$(this).val("请输入搜索内容");
    });
}
function shownnav(){
    $("#1").find(".jian").show();
     $("#c1").show();
	$(".navbox").mouseover(function(){
		$(".navfooter").hide();
		$(".jian").hide();
      $(this).find(".jian").show();
      var s=parseInt($(this).attr("id"));
      $("#c"+s).show();
	});
	$(".navbox").mouseout(function(){
		$(this).find(".jian").hide();
		$("#1").find(".jian").show();
		var s=parseInt($(this).attr("id"));
        $("#c"+s).hide();
        $("#c1").show();
	});
}