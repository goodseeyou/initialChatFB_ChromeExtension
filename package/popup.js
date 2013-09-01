$(document).ready(function(){

	$("#test").append("popup.js trigger<br/>");
	$("#test").append(document.title+"<br/>");
	var urladdr = "http://www.cs.nccu.edu.tw/~s9513/chromeExtensions/call/call.php";
	
	$.post(urladdr,{'name':'callname'},function(data){
		$("#test").append(data);
	})
	.fail(function(){
		$("#test").html("get fail<br/>");
	})
	.always(function(){
		$("#test").append("<br/> post terminate");
	});
	
	//alert(document.title);


});