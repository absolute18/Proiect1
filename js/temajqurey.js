
$(document).ready(function(){

 	$("#top .meniu-button").click(function(){
    $("#for-menu").show(300);
    $("#menu").show(300);
  });

	$("#menu .fa-times").click(function(){
    $("#for-menu").hide(10);
    $("#menu").hide(10);
  });


 });


/*
$(function(){
	$("button").click(function(){
		$('#box').fadeOut(1000);	
	});

//$(':contains("Johannes")').css('border','solid 1px red');
$("div.text-about").css('border','solid 1px red');
}); */	