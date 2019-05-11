$(document).ready(function(){





	$("#p1").click(function(){
		$(".main-left").animate({width:1024},600);
	});	

	$("#p3").click(function(){
		$(".main-right").animate({width:1024},600);	
	});

	$("#p2").click(function(){
		$(".main-bottom").animate({height:680},600);	
	});


		$("#clo-left").click(function(){
		$(".main-left").animate({width:0},600);
	});	

	$("#clo-right").click(function(){
		$(".main-right").animate({width:0},600);	
	});

	$("#clo-bottom").click(function(){
		$(".main-bottom").animate({height:0},600);	
	});





});


