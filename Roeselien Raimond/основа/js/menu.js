$(document).ready(function(){

	$("#menu").click(function(){ $("#list").slideToggle(2000)});
	
   $("#menu").toggle(function(){
      $("#imgmenu").attr("src","img/menudown.gif")}, function(){
      $("#imgmenu").attr("src","img/menuup.gif")
   });
   
   
   $("#menu").mouseover(function(){ $("#menu").css("background-color","#01939a")});
   $("#menu").mouseout(function(){ $("#menu").css("background-color","#006064")});


});