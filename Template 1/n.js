$(document).ready(function(){

   $("#menu").click(function(){ $("#list").slideToggle(200)});
   $("#menu").toggle(function(){
      $("#img").attr("src","menudown.gif")}, function(){
      $("#img").attr("src","menuup.gif")
   });
   $("#menu").mouseover(function(){ $("#menu").css("background-color","#01939a")});
   $("#menu").mouseout(function(){ $("#menu").css("background-color","#006064")});

});                         