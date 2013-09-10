$(document).ready(function(){
	/*
	$.get("http://www.cs.nccu.edu.tw/~s9513/chromeExtensions/call/call.php",function(data){
		$("#test").append(data);
	})
	.fail(function(){$("#test").append("fail<br/>");})
	.always(function(){$("#test").append("terminate");});

*/

	$.post("http://wa.nccu.edu.tw/QryTor/default.aspx",{},function(data){
		$("#test").append(data);
	})
	.fail(function(){$("#test").append("fail<br/>");})
	.always(function(){$("#test").append("terminate");});
});